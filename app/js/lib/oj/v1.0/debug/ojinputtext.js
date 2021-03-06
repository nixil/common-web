define(['ojs/ojcore', 'jquery', 'ojs/ojeditablevalue'], 
       /*
        * @param {Object} oj 
        * @param {jQuery} $
        */
       function(oj, $)
{

/**
 * @preserve Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */

/**
 * @class
 * @name oj.inputBase
 * @augments oj.editableValue
 * @since 0.6
 * 
 * @classdesc
 * <h3 id="inputBaseOverview-section">
 *   Abstract inputBase component
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#inputBaseOverview-section"></a>
 * </h3>
 * 
 * <p>Description: The inputBase component takes care of general needs of other input components [i.e. text + password]
 * 
 * @param {Object=} options a map of option-value pairs to set on the component
 */
oj.__registerWidget("oj.inputBase", $['oj']['editableValue'], 
{
  version : "1.0.0", 
  widgetEventPrefix : "oj",
  
  /**
   * Convenience Array which one can extend to set the attribute to a mandatory value if it doesn't exist or is set to something else 
   * [
   * {
   *    "attr"              : string - attribute associated to the task
   *    "setMandatory"      : value it must be set to [i.e. type="text"]
   * }
   * ]
   * 
   * Examples:
   * 1) [{"attr": "type", "setMandatory": "text"}]
   * 
   * @expose
   * @private
   */
  _ATTR_CHECK : [],
  
  /** 
   * Class names to be applied to this.element()
   * 
   * @expose
   * @private
   */
  _CLASS_NAMES : "",
  
  /** 
   * Class names to be applied to this.widget()
   * 
   * Note that if this value is defined then the this.element will be wrapped
   * 
   * @expose
   * @private
   */
  _WIDGET_CLASS_NAMES : "",
  
  /**
   * If defined will append a div element containing text to be read out by Jaws when focus is placed on the input element 
   * and the value will be used to locate the translated text to be read out by Jaws.
   * 
   * Note the component must also be wrapped
   * Used in conjunction with the above variable. Used to locate the translated text to be read out by Jaws
   * 
   * @expose
   * @private
   */
  _INPUT_HELPER_KEY: "",
  
  options : 
  {
    /** 
     * a converter instance that duck types {@link oj.Converter}. Or an object literal containing 
     * the following properties. 
     * <p>
     * If the converter option changes after the component has been initialized then <br/>
     * &nbsp;&nbsp;- if component is valid, the value option is formatted using the new converter instance 
     * and the display updated with the new value.<br/>
     * &nbsp;&nbsp;- otoh, if component is invalid when the converter option changed, it is the 
     * responsibility of the page author to clear messages on the component and reset value if 
     * needed.<br/>
     * 
     * @property {string} type - the converter type registered with the oj.ConverterFactory. 
     * Supported types are 'number' and 'datetime'. See {@link oj.ConverterFactory} for details. <br/>
     * E.g., <code class="prettyprint">{converter: {type: 'number'}</code>
     * @property {Object=} options - optional Object literal of options that the converter expects. 
     * See {@link oj.IntlNumberConverter} for options supported by the number converter. See 
     * {@link oj.IntlDateTimeConverter} for options supported by the date time converter. <br/>
     * E.g., <code class="prettyprint">{converter: {type: 'number', options: {style: 'decimal'}}</code>
     * 
     * @example <caption>Initialize the component with a number converter instance:</caption>
     * // Initialize converter instance using currency options
     * var options = {style: 'currency', 'currency': 'USD', maximumFractionDigits: 0};
     * var numberConverterFactory = oj.Validation.converterFactory("number");
     * var salaryConverter = numberConverterFactory.createConverter(options);<br/>
     * // set converter instance using converter option
     * $(".selector").ojFoo({ // Foo is InputText, InputPassword, TextArea
     *   value: 25000, 
     *   converter: salaryConverter
     * });
     * 
     * @example <caption>Initialize the component with converter object literal:</caption>
     * $(".selector").ojFoo({ // Foo is InputText, InputPassword, TextArea
     *   value: new Date(),
     *   converter: {
     *     type: 'datetime', 
     *     options : {
     *       formatType: 'date', 
     *       dateFormat: 'long'
     *     }
     *   }
     * });
     * 
     * @expose 
     * @access public
     * @instance
     * @memberof! oj.inputBase
     * @type {Object|undefined}
     */    
    converter: undefined,    
    
    /**
     * The placeholder text to set on the element. Though it is possible to set placeholder 
     * attribute on the element itself, the component will only read the value when the component
     * is created. Subsequent changes to the element's placeholder attribute will not be picked up 
     * and page authors should update the option directly.
     * 
     * @example <caption>Initialize the component with the <code class="prettyprint">placeholder</code> option:</caption>
     * &lt;!-- Foo is InputText, InputPassword, TextArea -->
     * &lt;input id="userId" data-bind="ojComponent: {component: 'ojFoo', placeholder: 'User Name'}" /&gt;
     * 
     * @example <caption>Initialize <code class="prettyprint">placeholder</code> option from html attribute:</caption>
     * &lt;!-- Foo is InputText, InputPassword, TextArea -->
     * &lt;input id="userId" data-bind="ojComponent: {component: 'ojFoo'}" placeholder="User Name" /&gt;
     * 
     * // reading the placeholder option will return "User Name"
     * $(".selector").ojFoo("option", "placeholder"); // Foo is InputText, InputPassword, TextArea<br/>
     * 
     * @default when the option is not set, the element's placeholder attribute is used if it exists. 
     * If the attribute is not set and if a datetime converter is set then the converter hint is 
     * used. See messagingDisplayOptions for details.
     * 
     * 
     * @expose 
     * @access public
     * @instance
     * @memberof! oj.inputBase
     * @type {string|null|undefined}
     */    
    placeholder: undefined,    
    
    /** 
     * Dictates component's readOnly state. Note that option value 
     * always supercedes element's attribute value and it is best practice to pass the value as an option than to 
     * set it as an element's attribute.
     * 
     * @example <caption>Initialize component with <code class="prettyprint">readOnly</code> option:</caption>
     * $(".selector").ojInputNumber({"readOnly": true});
     * 
     * @expose 
     * @type {boolean|undefined}
     * @default <code class="prettyprint">false</code>
     * @instance
     * @memberof! oj.inputBase
     */
    readOnly: undefined
  },
  
  /**
   * The base method needs to be overriden so that one can perform attribute check/set [i.e. ojInputText can only have type="text"] 
   * 
   * @protected
   * @override
   * @param {Object} element - jQuery selection to save attributes for
   * @instance
   * @memberof! oj.inputBase
   */
  _SaveAttributes : function (element)
  {
    var ret = this._superApply(arguments);
    
    this._processAttrCheck();
    
    return ret;
  },
  
  /**
   * @protected
   * @override
   * @instance
   * @memberof! oj.inputBase
   */
  _InitOptions: function(originalDefaults, constructorOptions)
  {
    var props = [{'attribute': 'disabled', 'defaultOptionValue': false, 'validateOption': true},
                 {'attribute': 'pattern', 'defaultOptionValue': ""},
                 {'attribute': 'placeholder', 'defaultOptionValue': ""},
                 {'attribute': 'value', 'defaultOptionValue': null},
                 {'attribute': 'readonly', 'option': 'readOnly', 'defaultOptionValue': false, 
                   'validateOption': true},
                 {'attribute': 'required', 'defaultOptionValue': "optional", 
                  'coerceDomValue': true, 'validateOption': true},
                 {'attribute': 'title', 'defaultOptionValue': ""}]; 
    
    this._super(originalDefaults, constructorOptions);
    oj.EditableValueUtils.initializeOptionsFromDom(props, constructorOptions, this);    
  },

  /**
   * 1) Initializes the options
   * 2) If needed wraps the input element, 
   * 
   * @protected
   * @override
   * @instance
   * @memberof! oj.inputBase
   */
  _ComponentCreate : function()
  {
    var node = this.element, 
        ret = this._superApply(arguments),
        savedAttributes = this._GetSavedAttributes(node);
    
    // update element state using options
    if (typeof this.options['readOnly'] === "boolean") 
    {
      this.element.prop("readonly", this.options['readOnly']);
    }
    
    if (this._DoWrapElement())
    {
      this._wrapElement();
    }
    
    // remove pattern attribute to not trigger html5 validation + inline bubble
    if ('pattern' in savedAttributes)
    {
      node.removeAttr('pattern');
    }
  
    return ret;
  },
  
  /**
   * 1) Updates component state based on the option values
   * 2) Adds the classname to the element [intentionally postponing till this process since the component might need to 
   *    reset this.element for some reason]
   * 3) Hooks up the blur handler
   * 4) If necessary appends an input helper to be read out by Jaws accessibility reader
   * 
   * @protected
   * @override
   * @instance
   * @memberof! oj.inputBase
   */        
  _AfterCreate : function () 
  {
    var ret = this._superApply(arguments),
        setOptions = ["disabled", "readOnly"],
        self = this;
    
    if(this._CLASS_NAMES) 
    {
      this.element.addClass(this._CLASS_NAMES);
    }
    
    this.element.on("blur", $.proxy(this._onBlurHandler, this));
    this.element.on("keydown", $.proxy(this._onKeyDownHandler, this));
    
    //other than FF when a drop is dispatched focus is placed back on the element
    //this would cause difference in behavior of the observable change [as set within blur], so in order to provide
    //consisteny placing the focus on the element after the drop
    this.element.on("drop", function() 
                      {
                        this.focus();
                      });
    
    this._AppendInputHelper();
    
    //reason it should go through _setOption are for cases where the components are composite and just 
    //placing it on the root node is not sufficient enough
    $.each(setOptions, function(index, ele)
    {
      self._setOption(ele, self.options[ele]);
    });
    
    return ret;
  },
  
  /**
   * @ignore
   * @protected
   * @override
   */
  _setOption : function __setOption(key, value)
  {
    var retVal = this._superApply(arguments);
    
    if (key === "disabled")
    {
      this.element.prop("disabled", value);
    }
    
    if (key === "readOnly")
    {
      this.element.prop("readonly", value);
      this._refreshStateTheming("readOnly", value);
    }

    if (key === "pattern")
    {
      this.__defaultRegExpOptions['pattern'] = value;
    }
    
    return retVal;
  },
  
  /**
   * @ignore
   * @protected
   * @override
   */
  _destroy : function __destroy()
  {
    var ret = this._superApply(arguments);

    this.element.off("blur drop keydown");
    
    if(this._inputHelper) 
    {
      this._inputHelper.remove();
    }
    
    if(this._DoWrapElement())
    {
      this.element.unwrap();
    }

    this._RestoreAttributes(); //remove when _RestoreAttributes is uncommented from jqueryui-base
    
    return ret;
  },
   /**
   * when below listed options are passed to the component, corresponding CSS will be toggled
   * @private
   * @const
   * @type {Object}
   */
  _OPTION_TO_CSS_MAPPING: {
    "readOnly": "oj-read-only"
  }, 
  /**
   * Performs the attribute check/set by using _ATTR_CHECK variable [i.e. ojInputText must have type be set to "text"].
   * 
   * @private
   */
  _processAttrCheck : function __processAttrCheck()
  {
    
    var attrCheck = this._ATTR_CHECK;
    
    for(var i=0, j=attrCheck.length; i < j; i++) 
    {
      var attr = attrCheck[i]["attr"],
          setMandatoryExists = "setMandatory" in attrCheck[i];
      
      //if it doesn't exist just have to check whether one should set it to a mandatory value
      if(setMandatoryExists)
      {
        this.element.attr(attr, attrCheck[i]["setMandatory"]);
      }
    }
  },
  
  /**
   * Invoked when blur is triggered of the this.element
   * 
   * @ignore
   * @protected
   * @param {Event} event
   */
  _onBlurHandler : function __onBlurHandler(event) 
  {
    this._SetValue(this._GetDisplayValue(), event);
  },
  
  /**
   * Invoked when keydown is triggered of the this.element
   * 
   * When of keyCode is of Enter, invoke _SetValue on it
   * 
   * @ignore
   * @protected
   * @param {Event} event
   */
  _onKeyDownHandler : function __onKeyDownHandler(event) 
  {
    if(event.keyCode === $.ui.keyCode.ENTER) 
    {
      this._SetValue(this._GetDisplayValue(), event);
    }
  },
  
  /**
   * Whether the this.element should be wrapped. Method so that additional conditions can be placed
   * 
   * @ignore
   * @protected
   * @return {boolean}
   */
  _DoWrapElement : function ()
  {
    return this._WIDGET_CLASS_NAMES;
  },
  
  /**
   * Wraps the this.element and adds _WIDGET_CLASS_NAMES classes to the wrapped element
   * 
   * @private
   */
  _wrapElement : function __wrapElement() 
  {
    $(this.element).wrap( $("<div>").addClass(this._WIDGET_CLASS_NAMES) );
    this._wrapper = this.element.parent();
  },
  
  /**
   * In some complex components [i.e. datepicker], when the input element receives focus we wish to have Jaws read 
   * out some content.
   * 
   * For those case does this method exist.
   *  
   * @protected
   * @instance
   * @memberOf !oj.inputBase
   */
  _AppendInputHelper : function __AppendInputHelper()
  {
    if(this._INPUT_HELPER_KEY && this._DoWrapElement()) 
    {
      var describedBy = this.element.attr("aria-describedby") || "",
          helperDescribedById = this._GetSubId(this._INPUT_HELPER_KEY);
      
      describedBy += " " + helperDescribedById;
      this.element.attr("aria-describedby", describedBy);
      this._inputHelper = $("<div class='oj-helper-hidden-accessible' id='" + helperDescribedById + "'>" + 
                              this.getTranslatedString(this._INPUT_HELPER_KEY) + "</div>");
      this.widget().append(this._inputHelper);
    }
  },
  
  /**
   * Called when the label DOM changes. This method resets any validators that rely on the label.
   * 
   * @protected
   * @override
   * @instance
   * @memberof! oj.inputBase
   */
  _RefreshLabelDependents : function ()
  {
    // for now reset all validators
    this.__defaultRegExpOptions = {};
    this._super();
  },
  
  /**
   * Sets up the default regExp validator.
   * 
   * @ignore
   * @protected
   * @override
   * @instance
   * @memberof! oj.inputBase
   */
  _GetDefaultValidators : function ()
  {
    var ret = this._superApply(arguments), validatorMap = {};

    // register a default RegExp validator if we have a valid pattern
    if (this.options['pattern'])
    {
      // add validator to the special internalValidators list. These are validators created by 
      // the framework. We don't want these cleared using the option - 'validators'
      validatorMap[oj.ValidatorFactory.VALIDATOR_TYPE_REGEXP] = this._getDefaultRegExpValidator();
    }
    
    return $.extend(validatorMap, ret);
  },
    /**
   * Toggles css selector on the widget. E.g., when readOnly option changes, 
   * the oj-read-only selector needs to be toggled.
   * @param {string} option
   * @param {Object|string} value 
   * @private
   */        
  _refreshStateTheming : function (option, value)
  {
    if (this._OPTION_TO_CSS_MAPPING.hasOwnProperty(option)) 
    {
      // value is a boolean
      this.widget().toggleClass(this._OPTION_TO_CSS_MAPPING[option], !!value);
    }
  },
  
  /**
   * Returns the regexp validator instance or creates it if needed and caches it.
   * @private
   */
  _getDefaultRegExpValidator : function ()
  {
    var vf;
    this.__defaultRegExpOptions = {'pattern': this.options['pattern'], 
                                   'label': this._getLabelText()};

    vf = oj.Validation.validatorFactory(oj.ValidatorFactory.VALIDATOR_TYPE_REGEXP);
    return vf ? vf.createValidator(this.__defaultRegExpOptions) : null;
  },  
  
  /**
   * This helper function will generate ids using widget's uuid as unique identifier for 
   * wai-aria and other necessary ids
   * 
   * @ignore
   * @protected
   * @param {string} sub
   * @return {string}
   */
  _GetSubId : function __getSubId(sub)
  {
    return this["uuid"] + "_" + sub;
  },
  
  /**
   * @ignore
   * @protected
   * @return {boolean}
   */
  _IsRTL : function ()
  {
    return this._GetReadingDirection() === "rtl";
  },
  
  /**
   * Return the subcomponent node represented by the documented locator attribute values.
   * @expose
   * @override
   * @param {Object} locator An Object containing at minimum a subId property whose value is a string, documented by the component, that allows the component to 
   *                        look up the subcomponent associated with that string.  It contains:<p>
   *                        component: optional - in the future there may be more than one component contained within a page element<p>
   *                        subId: the string, documented by the component, that the component expects in getNodeBySubId to locate a particular subcomponent
   * @returns {Object|null} the subcomponent located by the subId string passed in locator, if found.<p>
   */
  getNodeBySubId: function(locator)
  {
    return this._super(locator);
  },

  /**
   * Returns a <code class="prettyprint">jQuery</code> object containing the element visually 
   * representing the component, excluding the label associated with the it. 
   * 
   * <p>This method does not accept any arguments.</p>
   * 
   * @expose
   * @memberof! oj.inputBase
   * @instance
   * @return {jQuery} the root of the component
   * 
   * @example <caption>Invoke the <code class="prettyprint">widget</code> method:</caption>
   * var widget = $( ".selector" ).ojFoo( "widget" ); // Foo is InputText, InputPassword, TextArea
   */       
  widget : function _widget() 
  {
    return this._DoWrapElement() ? this._wrapper : this.element;
  }

});
/**
 * @preserve Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */

/**
 * @class
 * @name oj.ojInputText
 * @augments oj.inputBase
 * @since 0.6
 * 
 * @classdesc
 * <h3 id="inputTextOverview-section">
 *   JET ojInputText Component
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#inputTextOverview-section"></a>
 * </h3>
 * 
 * <p>Description: The ojInputText component enhances a browser input type="text" element.
 * <h3 id="pseudos-section">
 *   Pseudo-selectors
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#pseudos-section"></a>
 * </h3>
 * 
 * <pre class="prettyprint">
 * <code>$( ":oj-inputText" )            // selects all JET input on the page
 * </code>
 * </pre>
 * <h3 id="a11y-section">
 *   Accessibility
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#a11y-section"></a>
 * </h3>
 * <p>
 * It is up to the application developer to associate the label to the input component.
 * For inputText, you should put an <code>id</code> on the input, and then set 
 * the <code>for</code> attribute on the label to be the input's id.
 * </p>
 * <h3 id="label-section">
 *   Label and InputText
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#label-section"></a>
 * </h3>
 * <p>
 * For accessibility, you should associate a label element with the input
 * by putting an <code>id</code> on the input, and then setting the 
 * <code>for</code> attribute on the label to be the input's id.
 * </p>
 * <p>
 * The component will decorate its associated label with required and help 
 * information, if the <code>required</code> and <code>help</code> options are set. 
 * </p>
 * <h3 id="binding-section">
 *   Declarative Binding
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#binding-section"></a>
 * </h3>
 * 
 * <pre class="prettyprint">
 * <code>
 *    &lt;input id="textId" data-bind="ojComponent: {component: 'ojInputText'}" /&gt;
 * </code>
 * </pre>
 * 
 * @desc Creates or re-initializes a JET ojInputText
 * 
 * @param {Object=} options a map of option-value pairs to set on the component
 * 
 * @example <caption>Initialize the input element with no options specified:</caption>
 * $( ".selector" ).ojInputText();
 * 
 * * @example <caption>Initialize the input element with some options:</caption>
 * $( ".selector" ).ojInputText( { "disabled": true } );
 * 
 * @example <caption>Initialize the input element via the JET <code class="prettyprint">ojComponent</code> binding:</caption>
 * &lt;input id="textId" data-bind="ojComponent: {component: 'ojInputText'}" /&gt;
 */
oj.__registerWidget("oj.ojInputText", $['oj']['inputBase'],
{
  version : "1.0.0",  
  defaultElement : "<input>", 
  widgetEventPrefix : "oj", 
  
  /** 
   * @expose
   * @private
   */
  _ATTR_CHECK : [{"attr": "type", "setMandatory": "text"}],
  
  /** 
   * @expose
   * @private
   */
  _CLASS_NAMES : "oj-inputtext-input",
  
  /** 
   * @expose
   * @private
   */
  _WIDGET_CLASS_NAMES : "oj-inputtext oj-form-control oj-component",
  
  options : 
  {
    /** 
     * Regular expression pattern which will be used to validate the component's value. Note that option value 
     * always supercedes element's attribute value and it is best practice to pass the value as an option than to 
     * set it as an element's attribute.
     * 
     * @example <caption>Initialize the component with the <code class="prettyprint">pattern</code> option:</caption>
     * $(".selector").ojInputText({pattern: "[a-zA-Z0-9]{3-9}"});<br/>
     * @example <caption>Initialize <code class="prettyprint">pattern</code> option from the html attribute 'pattern':</caption>
     * &lt;input type="text" id="username" value= "" pattern="[a-zA-Z0-9]{3,}" 
     *           title="Enter at least 3 alphanumeric characters"/><br/>
     * // reading the pattern option will return "[a-zA-Z0-9]{3-9}"
     * $(".selector").ojInputText("option", "pattern");<br/>
     * 
     * @expose 
     * @instance
     * @memberof! oj.ojInputText
     * @type {string|undefined}
     */    
    pattern: undefined
  },
  
  /**
   * @override
   * @protected
   * @return {string}
   */
  _GetDefaultStyleClass : function ()
  {
    return "oj-inputtext";
  }
  
});
/**
 * @preserve Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */

/**
 * @class
 * @name oj.ojTextArea
 * @augments oj.inputBase
 * @since 0.6
 * 
 * @classdesc
 * <h3 id="textAreaOverview-section">
 *   JET ojTextArea Component
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#textAreaOverview-section"></a>
 * </h3>
 * 
 * <p>Description: The ojTextArea component enhances a browser textarea element.
 * <h3 id="pseudos-section">
 *   Pseudo-selectors
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#pseudos-section"></a>
 * </h3>
 * 
 * <pre class="prettyprint">
 * <code>$( ":oj-textarea" )            // selects all JET textarea on the page
 * </code>
 * </pre>
 * <h3 id="a11y-section">
 *   Accessibility
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#a11y-section"></a>
 * </h3>
 * <p>
 * It is up to the application developer to associate the label to the textarea
 * component. For textarea, you should put an <code>id</code> on the textarea,
 * and then set the <code>for</code> attribute on the label to be the textarea's id.
 * </p>
 * <h3 id="label-section">
 *   Label and TextArea
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#label-section"></a>
 * </h3>
 * <p>
 * For accessibility, you should associate a label element with the textarea
 * by putting an <code>id</code> on the textarea, and then setting the 
 * <code>for</code> attribute on the label to be the textarea's id.
 * </p>
 * <p>
 * The component will decorate its associated label with required and help 
 * information, if the <code>required</code> and <code>help</code> options are set. 
 * </p>
 * <h3 id="binding-section">
 *   Declarative Binding
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#binding-section"></a>
 * </h3>
 * 
 * <pre class="prettyprint">
 * <code>
 *    &lt;textarea id="textAreaId" data-bind="ojComponent: {component: 'ojTextArea'}" &gt;&lt;/textarea&gt;
 * </code>
 * </pre>
 * 
 * @desc Creates or re-initializes a JET ojTextArea.
 * 
 * @param {Object=} options a map of option-value pairs to set on the component
 * 
 * @example <caption>Initialize the textarea with no options specified:</caption>
 * $( ".selector" ).ojTextArea();
 * 
 * * @example <caption>Initialize the textarea with some options:</caption>
 * $( ".selector" ).ojTextArea( { "disabled": true } );
 * 
 * @example <caption>Initialize the textarea via the JET <code class="prettyprint">ojComponent</code> binding:</caption>
 * &lt;textarea id="textAreaId" data-bind="ojComponent: {component: 'ojTextArea'}" &gt;&lt;/textarea&gt;
 */
oj.__registerWidget("oj.ojTextArea", $['oj']['inputBase'],
{
  version : "1.0.0",  
  defaultElement : "<textarea>", 
  widgetEventPrefix : "oj", 
  
  /** 
   * @expose
   * @private
   */
  _ATTR_CHECK : [],
  
  /** 
   * @expose
   * @private
   */
  _CLASS_NAMES : "oj-textarea-input",
  
  /** 
   * @expose
   * @private
   */
  _WIDGET_CLASS_NAMES : "oj-textarea oj-form-control oj-component",
  
  options : 
  {
    /** 
     * Regular expression pattern which will be used to validate the component's value. Note that option value 
     * always supercedes element's attribute value and it is best practice to pass the value as an option than to 
     * set it as an element's attribute.
     * 
     * @example <caption>Initialize the component with the <code class="prettyprint">pattern</code> option:</caption>
     * $(".selector").ojTextArea({pattern: "[a-zA-Z0-9]{3-9}"});<br/>
     * @example <caption>Initialize <code class="prettyprint">pattern</code> option from the html attribute 'pattern':</caption>
     * &lt;input type="text" id="username" value= "" pattern="[a-zA-Z0-9]{3,}" 
     *           title="Enter at least 3 alphanumeric characters"/><br/>
     * // reading the pattern option will return "[a-zA-Z0-9]{3-9}"
     * $(".selector").ojTextArea("option", "pattern");<br/>
     * 
     * @expose 
     * @instance
     * @memberof! oj.ojTextArea
     * @type {string|undefined}
     */    
    pattern: undefined
  },
  
  /**
   * @override
   * @protected
   * @return {string}
   */
  _GetDefaultStyleClass : function ()
  {
    return "oj-textarea";
  }
  
});
/**
 * @preserve Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */

/**
 * @class
 * @name oj.ojInputPassword
 * @augments oj.inputBase
 * @since 0.6
 * 
 * @classdesc
 * <h3 id="inputPasswordOverview-section">
 *   JET ojInputPassword Component
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#inputPasswordOverview-section"></a>
 * </h3>
 * 
 * <p>Description: The ojInputPassword component enhances a browser input type="password" element.
 * <h3 id="pseudos-section">
 *   Pseudo-selectors
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#pseudos-section"></a>
 * </h3>
 * 
 * <pre class="prettyprint">
 * <code>$( ":oj-inputPassword" )            // selects all JET input on the page
 * </code>
 * </pre>
 * <h3 id="a11y-section">
 *   Accessibility
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#a11y-section"></a>
 * </h3>
 * <p>
 * It is up to the application developer to associate the label to the input component.
 * For inputPassword, you should put an <code>id</code> on the input, and then set 
 * the <code>for</code> attribute on the label to be the input's id.
 * </p>
 * <h3 id="label-section">
 *   Label and InputPassword
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#label-section"></a>
 * </h3>
 * <p>
 * For accessibility, you should associate a label element with the input
 * by putting an <code>id</code> on the input, and then setting the 
 * <code>for</code> attribute on the label to be the input's id.
 * </p>
 * <p>
 * The component will decorate its associated label with required and help 
 * information, if the <code>required</code> and <code>help</code> options are set. 
 * </p>
 * <h3 id="binding-section">
 *   Declarative Binding
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#binding-section"></a>
 * </h3>
 * 
 * <pre class="prettyprint">
 * <code>
 *    &lt;input id="passwordId" data-bind="ojComponent: {component: 'ojInputPassword'}" /&gt;
 * </code>
 * </pre>
 * 
 * @desc Creates or re-initializes a JET ojInputPassword
 * 
 * @param {Object=} options a map of option-value pairs to set on the component
 * 
 * @example <caption>Initialize the input element with no options specified:</caption>
 * $( ".selector" ).ojInputPassword();
 * 
 * * @example <caption>Initialize the input element with some options:</caption>
 * $( ".selector" ).ojInputPassword( { "disabled": true } );
 * 
 * @example <caption>Initialize the input element via the JET <code class="prettyprint">ojComponent</code> binding:</caption>
 * &lt;input id="passwordId" data-bind="ojComponent: {component: 'ojInputPassword'}" /&gt;
 */
oj.__registerWidget("oj.ojInputPassword", $['oj']['inputBase'],
{
  version : "1.0.0",  
  defaultElement : "<input>", 
  widgetEventPrefix : "oj", 
  
  /** 
   * @expose
   * @private
   */
  _ATTR_CHECK : [{"attr": "type", "setMandatory": "password"}],
  
  /** 
   * @expose
   * @private
   */
  _CLASS_NAMES : "oj-inputpassword-input",
  
  /** 
   * @expose
   * @private
   */
  _WIDGET_CLASS_NAMES : "oj-inputpassword oj-form-control oj-component",
  
  options : 
  {
    /** 
     * Regular expression pattern which will be used to validate the component's value. Note that option value 
     * always supercedes element's attribute value and it is best practice to pass the value as an option than to 
     * set it as an element's attribute.
     * 
     * @example <caption>Initialize the component with the <code class="prettyprint">pattern</code> option:</caption>
     * $(".selector").ojInputPassword({pattern: "[a-zA-Z0-9]{3-9}"});<br/>
     * @example <caption>Initialize <code class="prettyprint">pattern</code> option from the html attribute 'pattern':</caption>
     * &lt;input type="text" id="username" value= "" pattern="[a-zA-Z0-9]{3,}" 
     *           title="Enter at least 3 alphanumeric characters"/><br/>
     * // reading the pattern option will return "[a-zA-Z0-9]{3-9}"
     * $(".selector").ojInputPassword("option", "pattern");<br/>
     * 
     * @expose 
     * @instance
     * @memberof! oj.ojInputPassword
     * @type {string|undefined}
     */    
    pattern: undefined
  },
  
  /**
   * @override
   * @protected
   * @return {string}
   */
  _GetDefaultStyleClass : function ()
  {
    return "oj-inputpassword";
  }
   
});
});
