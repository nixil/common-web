/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
define(['ojs/ojcore', 'knockout', 'ojs/ojmodel'], function(oj, ko)
{
/**
 * @class Utility methods for blending Knockout observables with the data model
 * @export
 */
oj.KnockoutUtils = function () {};

oj.KnockoutUtils.internalObjectProperty = "oj._internalObj";
oj.KnockoutUtils.underUpdateProp = "oj._underUpdate";
oj.KnockoutUtils.collUpdatingProp = "oj.collectionUpdating";

/**
 * Turns the attributes in a model object (or the attributes of all models in a collection object) into Knockout observables for use with components' view models.  
 * @param {Object} m The model or collection containing the attributes to be converted to Knockout observables. 
 * @param {function(Object)=} callback Called once per model so that a caller can add their own Knockout computed observables to the model. 
 * @param {boolean=} array Should function return an observable array if m is an oj.Collection, vs. an array of observables?
 * 
 * @return {Object|undefined} array of Knockout observables or an observable array
 * @export
 */
oj.KnockoutUtils.map = function (m, callback, array) 
{
  var koObject, i, updateCollection, updateObservableArrayRemove, updateObservableArrayAdd,
      data, prop, converted, updateModel, updateObservable, updateObservableArrayReset, updateObservableArraySort;

  function _makeUpdateModel(argProp) {
      return function(value) {
          //arguments.callee refers to the callback function itself, so we can use the stored '_prop' object (see below)
          if (!koObject[oj.KnockoutUtils.underUpdateProp]) {
              // Make sure we don't circuluarly fire the event
              m.set(argProp, value);
          }
        };
      }
      
  if (m instanceof oj.Collection)
  {
    /*koObject = array ? ko.observableArray() : oj.KnockoutUtils._createArray(m,
                                                        function (index) {
                                                            var defer = $.Deferred();
                                                            m.at(index, true).done(function(model) {
                                                                defer.resolve(oj.KnockoutUtils.map(model, callback));
                                                            });
                                                            return defer.promise();
                                                        });*/
    koObject = array ? ko.observableArray() : [];
    
    // Need access to original wrapped collection
    oj.KnockoutUtils._storeOriginalObject(koObject, m);
    
    for (i = 0; i < m._getLength(); i=i+1) 
    {
        koObject.push(oj.KnockoutUtils.map(m._atInternal(i, null, true, false), callback));
    }
            
    // Subscribe to the observable Array, if it is one
    updateCollection = function(changes)
    {
       var modArray, i, len;
       try {
            if (!koObject[oj.KnockoutUtils.underUpdateProp]) {
                koObject[oj.KnockoutUtils.collUpdatingProp] = true;
/*                // Pull out an array of model objects from the new observable array
                modArray = oj.KnockoutUtils._getModels(value);
                m.set(modArray);
                */
                // Process change information
                for (i = 0; i < changes.length; i++) {
                    var index = changes[i]['index'];
                    var model = oj.KnockoutUtils._getModel(changes[i]['value']);
                    var status = changes[i]['status'];
                    if (status === 'added') {
                        if (index >= m.length-1) {
                            m.add(model);
                        }
                        else {
                            m.add(model, {'at':index});
                        }
                    }                    
                    else if (status === 'deleted') {
                        m._removeInternal(model, index);
                    }
                }
                if (m['comparator']) {
                    koObject[oj.KnockoutUtils.underUpdateProp] = true;
                    // These could have been resorted--need to alter the observable array
                   koObject.sort(function(a, b) { 
                                        return oj.Collection.SortFunc(a, b, m['comparator'], m, this);
                                    });       
                    koObject[oj.KnockoutUtils.underUpdateProp] = false;
                }
            }
       }
       catch (e) {
           throw e;
       }
       finally {
           koObject[oj.KnockoutUtils.collUpdatingProp] = false;
       }           
    };    
    if (array && koObject['subscribe']) {
        koObject['subscribe'](updateCollection, null, 'arrayChange');
    }
    
     updateObservableArrayRemove = function(model, collection, options) {
         var index;
         try
         {
            if (koObject[oj.KnockoutUtils.collUpdatingProp]) {
                return;
            }
            if (collection instanceof oj.Collection) {
                koObject[oj.KnockoutUtils.underUpdateProp] = true;
                index = options['index'];
                koObject.splice(index, 1);
            }
         }
         catch (e) {
             throw e;
         }
         finally {
            koObject[oj.KnockoutUtils.underUpdateProp] = false;         
         }
     };
     updateObservableArrayAdd = function(model, collection, options) {
         var index, newObservable, len;
         try
         {
            if (koObject[oj.KnockoutUtils.collUpdatingProp]) {
                return;
            }
            if (collection instanceof oj.Collection) {
                koObject[oj.KnockoutUtils.underUpdateProp] = true;
                index = collection._localIndexOf(model);
                if (index !== undefined && index > -1) {
                    // Make sure to map with original callback from closure, if any
                    newObservable = oj.KnockoutUtils.map(model, callback);
                    if (options['fillIn']) {
                        // First, make sure there's enough room, that index actually exists in koObject...
                        var currLen = Array.isArray(koObject) ? koObject.length : koObject().length;
                        for (var i = currLen; i < index; i++) {
                            koObject.splice(i, 0, oj.KnockoutUtils.map(collection._atInternal(i, null, true, false), callback));
                        }
                        // If we're just filling in on a virtual collection, for example, then just set don't add
                        koObject.splice(index, 1, newObservable);
                    }
                    else {
                        koObject.splice(index, 0, newObservable);
                    }
                }                   
            }
         }
         catch (e) {
             throw e;
         }
         finally {
            koObject[oj.KnockoutUtils.underUpdateProp] = false;         
         }
     };     
     updateObservableArrayReset = function(collection, options) {
         try
         {
            if (koObject[oj.KnockoutUtils.collUpdatingProp]) {
                return;
            }
            if (collection instanceof oj.Collection) {
                koObject[oj.KnockoutUtils.underUpdateProp] = true;
               // koObject.splice(0, koObject().length);
                    if (ko.isObservable(koObject)) {
                        koObject.removeAll();
                    }
                    else {
                        koObject = [];
                    }
            }
         }
         catch (e) {
             throw e;
         }
         finally {
            koObject[oj.KnockoutUtils.underUpdateProp] = false;         
         }
     };     
     
     updateObservableArraySort = function(collection, options) {
         try
         {
            var len;
            if (koObject[oj.KnockoutUtils.collUpdatingProp]) {
                return;
            }
            if (collection instanceof oj.Collection) {
                koObject[oj.KnockoutUtils.underUpdateProp] = true;
                // Redo the knockout observable array

                koObject.sort(function(a, b) { 
                                return oj.Collection.SortFunc(a, b, m['comparator'], collection, this);
                             });   
            }
         }
         catch (e) {
             throw e;
         }
         finally {
            koObject[oj.KnockoutUtils.underUpdateProp] = false;         
         }
     };
     
     // Register these, ignoring the silent flags from normal API calls--knockout always needs to be updated
     m.OnInternal(oj.Events.EventType['ADD'], updateObservableArrayAdd, undefined, undefined, true);    
     m.OnInternal(oj.Events.EventType['REMOVE'], updateObservableArrayRemove, undefined, undefined, true);    
     m.OnInternal(oj.Events.EventType['RESET'], updateObservableArrayReset, undefined, undefined, true);
     m.OnInternal(oj.Events.EventType['SORT'], updateObservableArraySort, undefined, undefined, true);
  }
  else
  {
    if (m === undefined) {
        return;
    }
    
    koObject = {};
    
    data = m.attributes;
    prop = null;
    
    for (prop in data)
    {
      if (data.hasOwnProperty(prop)) {
        converted = ko.observable(m.get(prop));
        koObject[prop] = converted;

        updateModel = _makeUpdateModel(prop);
        updateModel._prop = prop;

        // Subscribe to any changes pushed by Knockout into the observable
        if (converted['subscribe']) {
            converted['subscribe'](updateModel);
        }
      }
     }

     updateObservable = function(model, options) {
         var attrs, prop;
         try
         {
            koObject[oj.KnockoutUtils.underUpdateProp] = true;
            attrs = model.changedAttributes();
            for (prop in attrs) {
                if (attrs.hasOwnProperty(prop)) {
                 koObject[prop](model.get(prop));
                }
            }
         }
         catch (e) {
             throw e;
         }
         finally {
            koObject[oj.KnockoutUtils.underUpdateProp] = false;         
         }
     };
     m.OnInternal(oj.Events.EventType['CHANGE'], updateObservable, undefined, undefined, true);
     // Need access to original wrapped model
    oj.KnockoutUtils._storeOriginalObject(koObject, m);

    // Activate user callback if specified, to allow user computed observables, etc.
    if (callback) {
        callback(koObject);
    }
  }
  
  return koObject;     
};

oj.KnockoutUtils._getModels = function(arr) {
    var modelArray = [], i, model;
    for (i = 0; i < arr.length; i=i+1) {
        model = oj.KnockoutUtils._getModel(arr[i]);
        modelArray.push(model);
    }
    return modelArray;
};

oj.KnockoutUtils._getModel = function(val) {
    if (val instanceof oj.Model) {
        return val;
    }
    
    return val[oj.KnockoutUtils.internalObjectProperty];
};


// Attempt to hide original object from enumeration of properties
oj.KnockoutUtils._storeOriginalObject = function(object, value) {
    // Store any callback along with model for use in event-driven mapping of new additions
       Object.defineProperty(object, oj.KnockoutUtils.internalObjectProperty, {value: value, enumerable:false});
};

/*oj.KnockoutUtils._createArray = function(collection, getCallback) {
    if (collection._isVirtual()) {
        return oj.KnockoutUtils._augment(collection.length, getCallback);
    }
    return [];
};

oj.KnockoutUtils._augment = function(len, getCallback) {
    var array;
    if (len.constructor === Array) {
        array = new Array(len.length);
        array.storage = len;
    }
    else {
        array = new Array(len);
        array.storage = new Array(len);
    }
    function makePropDef(arr) {
        return function (index, callback) {
                Object.defineProperty(arr, index.toString(), {
                    configurable:true,
                    get: function() { 
                        // Someone is accessing this location: if not set, set it using the callback before returning
                        if (!arr.storage[index]) {
                            arr.storage[index] = callback.call(this, index);
                        }
                        return arr.storage[index];
                    },
                    set: function(val) {
                        arr.storage[index] = val;
                    }
                });
            };
    }

    array.getCallback = getCallback;
        
    function setup(arr) {
        var i;
        arr.length = arr.storage.length;
        for (i = 0; i < arr.storage.length; i++) {
            makePropDef(arr)(i, arr.getCallback);
        }
    }
    setup(array);
    
    array.length = array.storage.length;
    
    array['pop'] = function() {
        var retVal = this.storage.pop();
        this.length = this.storage.length;
        return retVal;
    };
    array['push'] = function(val) {
        var index = this.length;
        this.storage.push(val);
        Object.defineProperty(this, index.toString(), {
                configurable:true,
                get: function() { 
                        // Someone is accessing this location: if not set, set it using the callback before returning
                        if (!this.storage[index]) {
                            this.storage[index] = this.getCallback.call(this, index);
                        }
                        return this.storage[index];
                },
                set: function(val) {
                    this.storage[index] = val;
                }
            });    
        return this.length;
    };
    array['shift'] = function() {
        var self = this;
        var retVal = self.storage.shift();
        setup(self);
        return retVal;
    };
    array['unshift'] = function() {
        var args = Array.prototype.slice.call(arguments), i;
        for (i = 0; i < args.length; i++) {
            this.storage.unshift(args[i]);
        }
        setup(this);
        return this.length;
    };
    array['reverse'] = function() {
        this.storage = this.storage.reverse();
        setup(this);
        return this;
    };
    array['slice'] = function(start, end) {
        var newArr = oj.KnockoutUtils._augment(this.storage.slice(start, end), this.getCallback);
        return newArr;
    };
    array['splice'] = function() {
        var args = Array.prototype.slice.call(arguments);    
        // Just redo the array after modifying storage
        Array.prototype.splice.apply(this.storage, args);
        setup(this);
    };
    return array;
};*/
});
