/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2008, 2013, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2008, 2013, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2008, 2013, Oracle and/or its affiliates. 
 All rights reserved.
*/
define(["ojs/ojcore", "jquery", "ojL10n!ojtranslations/nls/localeElements", "ojs/ojmessaging"], function($oj$$6$$, $$$$6$$, $ojld$$1$$) {
  $oj$$6$$.$LocaleData$ = {};
  $goog$exportPath_$$("LocaleData", $oj$$6$$.$LocaleData$, $oj$$6$$);
  $oj$$6$$.$LocaleData$.$setBundle$ = function $$oj$$6$$$$LocaleData$$$setBundle$$($bundle$$3$$) {
    $oj$$6$$.$LocaleData$.$_bundle$ = $bundle$$3$$;
  };
  $goog$exportPath_$$("LocaleData.setBundle", $oj$$6$$.$LocaleData$.$setBundle$, $oj$$6$$);
  $oj$$6$$.$LocaleData$.$getFirstDayOfWeek$ = function $$oj$$6$$$$LocaleData$$$getFirstDayOfWeek$$() {
    return $oj$$6$$.$LocaleData$.$_getWeekData$("firstDay");
  };
  $goog$exportPath_$$("LocaleData.getFirstDayOfWeek", $oj$$6$$.$LocaleData$.$getFirstDayOfWeek$, $oj$$6$$);
  $oj$$6$$.$LocaleData$.$getWeekendStart$ = function $$oj$$6$$$$LocaleData$$$getWeekendStart$$() {
    return $oj$$6$$.$LocaleData$.$_getWeekData$("weekendStart");
  };
  $goog$exportPath_$$("LocaleData.getWeekendStart", $oj$$6$$.$LocaleData$.$getWeekendStart$, $oj$$6$$);
  $oj$$6$$.$LocaleData$.$getWeekendEnd$ = function $$oj$$6$$$$LocaleData$$$getWeekendEnd$$() {
    return $oj$$6$$.$LocaleData$.$_getWeekData$("weekendEnd");
  };
  $goog$exportPath_$$("LocaleData.getWeekendEnd", $oj$$6$$.$LocaleData$.$getWeekendEnd$, $oj$$6$$);
  $oj$$6$$.$LocaleData$.$getDayNames$ = function $$oj$$6$$$$LocaleData$$$getDayNames$$($days_type$$67$$) {
    if (null == $days_type$$67$$ || "abbreviated" !== $days_type$$67$$ && "narrow" !== $days_type$$67$$) {
      $days_type$$67$$ = "wide";
    }
    $days_type$$67$$ = $oj$$6$$.$LocaleData$.$_getCalendarData$().days["stand-alone"][$days_type$$67$$];
    return[$days_type$$67$$.sun, $days_type$$67$$.mon, $days_type$$67$$.tue, $days_type$$67$$.wed, $days_type$$67$$.thu, $days_type$$67$$.fri, $days_type$$67$$.sat];
  };
  $goog$exportPath_$$("LocaleData.getDayNames", $oj$$6$$.$LocaleData$.$getDayNames$, $oj$$6$$);
  $oj$$6$$.$LocaleData$.$getMonthNames$ = function $$oj$$6$$$$LocaleData$$$getMonthNames$$($months_type$$68$$) {
    if (null == $months_type$$68$$ || "abbreviated" !== $months_type$$68$$ && "narrow" !== $months_type$$68$$) {
      $months_type$$68$$ = "wide";
    }
    $months_type$$68$$ = $oj$$6$$.$LocaleData$.$_getCalendarData$().months["stand-alone"][$months_type$$68$$];
    return[$months_type$$68$$["1"], $months_type$$68$$["2"], $months_type$$68$$["3"], $months_type$$68$$["4"], $months_type$$68$$["5"], $months_type$$68$$["6"], $months_type$$68$$["7"], $months_type$$68$$["8"], $months_type$$68$$["9"], $months_type$$68$$["10"], $months_type$$68$$["11"], $months_type$$68$$["12"]];
  };
  $goog$exportPath_$$("LocaleData.getMonthNames", $oj$$6$$.$LocaleData$.$getMonthNames$, $oj$$6$$);
  $oj$$6$$.$LocaleData$.$isMonthPriorToYear$ = function $$oj$$6$$$$LocaleData$$$isMonthPriorToYear$$() {
    var $longDateFormat_yearIndex$$ = $oj$$6$$.$LocaleData$.$_getCalendarData$().dateFormats["long"].toUpperCase(), $monthIndex$$ = $longDateFormat_yearIndex$$.indexOf("M"), $longDateFormat_yearIndex$$ = $longDateFormat_yearIndex$$.indexOf("Y");
    return $monthIndex$$ < $longDateFormat_yearIndex$$;
  };
  $goog$exportPath_$$("LocaleData.isMonthPriorToYear", $oj$$6$$.$LocaleData$.$isMonthPriorToYear$, $oj$$6$$);
  $oj$$6$$.$LocaleData$.$_getWeekData$ = function $$oj$$6$$$$LocaleData$$$_getWeekData$$($data$$46_key$$36$$) {
    var $b$$31$$ = $oj$$6$$.$LocaleData$.$__getBundle$(), $region_val$$21$$ = $oj$$6$$.$LocaleData$.$_getRegion$() || "001";
    $data$$46_key$$36$$ = $b$$31$$.supplemental.weekData[$data$$46_key$$36$$];
    $region_val$$21$$ = $data$$46_key$$36$$[$region_val$$21$$];
    void 0 === $region_val$$21$$ && ($region_val$$21$$ = $data$$46_key$$36$$["001"]);
    return $region_val$$21$$;
  };
  $oj$$6$$.$LocaleData$.$_getCalendarData$ = function $$oj$$6$$$$LocaleData$$$_getCalendarData$$() {
    var $main$$ = $oj$$6$$.$LocaleData$.$__getBundle$().main, $data$$47$$, $p$$1$$;
    for ($p$$1$$ in $main$$) {
      if ($main$$.hasOwnProperty($p$$1$$)) {
        $data$$47$$ = $main$$[$p$$1$$];
        break;
      }
    }
    return $data$$47$$.dates.calendars.gregorian;
  };
  $oj$$6$$.$LocaleData$.$_getRegion$ = function $$oj$$6$$$$LocaleData$$$_getRegion$$() {
    var $locale$$1_tokens$$1$$ = $oj$$6$$.$Config$.$getLocale$();
    if ($locale$$1_tokens$$1$$ && ($locale$$1_tokens$$1$$ = $locale$$1_tokens$$1$$.toUpperCase().split(/-|_/), 2 <= $locale$$1_tokens$$1$$.length)) {
      var $tag$$ = $locale$$1_tokens$$1$$[1];
      if (4 == $tag$$.length) {
        if (3 <= $locale$$1_tokens$$1$$.length) {
          return $locale$$1_tokens$$1$$[2];
        }
      } else {
        return $tag$$;
      }
    }
    return null;
  };
  $oj$$6$$.$LocaleData$.$__getBundle$ = function $$oj$$6$$$$LocaleData$$$__getBundle$$() {
    var $b$$33$$ = $oj$$6$$.$LocaleData$.$_bundle$;
    return $b$$33$$ ? $b$$33$$ : $oj$$6$$.$__isAmdLoaderPresent$() ? ($oj$$6$$.$Assert$.assert(void 0 !== $ojld$$1$$, "LocaleElements module must be loaded"), $ojld$$1$$) : {};
  };
  $oj$$6$$.$LocaleData$.$__updateBundle$ = function $$oj$$6$$$$LocaleData$$$__updateBundle$$($bundle$$4$$) {
    $ojld$$1$$ = $bundle$$4$$;
  };
  $oj$$6$$.$Validation$ = {};
  $goog$exportPath_$$("Validation", $oj$$6$$.$Validation$, $oj$$6$$);
  $oj$$6$$.$Validation$.$_converterFactories$ = {};
  $oj$$6$$.$Validation$.$_validatorFactories$ = {};
  $oj$$6$$.$Validation$.$_defaultConverterFactories$ = {};
  $oj$$6$$.$Validation$.$_defaultValidatorFactories$ = {};
  $oj$$6$$.$Validation$.$_CONTRACTS$ = {converter:{name:"oj.ConverterFactory", type:$oj$$6$$.$ConverterFactory$}, validator:{name:"oj.ValidatorFactory", type:$oj$$6$$.$ValidatorFactory$}};
  $oj$$6$$.$Validation$.$converterFactory$ = function $$oj$$6$$$$Validation$$$converterFactory$$($type$$69$$, $instance$$6$$) {
    var $retValue$$;
    $type$$69$$ && !$instance$$6$$ ? $retValue$$ = $oj$$6$$.$Validation$.$_getFactory$($type$$69$$, $oj$$6$$.$Validation$.$_converterFactories$) : $type$$69$$ && $instance$$6$$ && ($retValue$$ = $oj$$6$$.$Validation$.$_registerFactory$($type$$69$$, $instance$$6$$, $oj$$6$$.$Validation$.$_converterFactories$, $oj$$6$$.$Validation$.$_CONTRACTS$.converter));
    return $retValue$$;
  };
  $goog$exportPath_$$("Validation.converterFactory", $oj$$6$$.$Validation$.$converterFactory$, $oj$$6$$);
  $oj$$6$$.$Validation$.$validatorFactory$ = function $$oj$$6$$$$Validation$$$validatorFactory$$($type$$70$$, $instance$$7$$) {
    var $retValue$$1$$;
    $type$$70$$ && !$instance$$7$$ ? $retValue$$1$$ = $oj$$6$$.$Validation$.$_getFactory$($type$$70$$, $oj$$6$$.$Validation$.$_validatorFactories$) : $type$$70$$ && $instance$$7$$ && ($retValue$$1$$ = $oj$$6$$.$Validation$.$_registerFactory$($type$$70$$, $instance$$7$$, $oj$$6$$.$Validation$.$_validatorFactories$, $oj$$6$$.$Validation$.$_CONTRACTS$.validator));
    return $retValue$$1$$;
  };
  $goog$exportPath_$$("Validation.validatorFactory", $oj$$6$$.$Validation$.$validatorFactory$, $oj$$6$$);
  $oj$$6$$.$Validation$.$getDefaultConverterFactory$ = function $$oj$$6$$$$Validation$$$getDefaultConverterFactory$$($type$$71$$) {
    return $oj$$6$$.$Validation$.$_getFactory$($type$$71$$, $oj$$6$$.$Validation$.$_defaultConverterFactories$);
  };
  $goog$exportPath_$$("Validation.getDefaultConverterFactory", $oj$$6$$.$Validation$.$getDefaultConverterFactory$, $oj$$6$$);
  $oj$$6$$.$Validation$.$getDefaultValidatorFactory$ = function $$oj$$6$$$$Validation$$$getDefaultValidatorFactory$$($type$$72$$) {
    return $oj$$6$$.$Validation$.$_getFactory$($type$$72$$, $oj$$6$$.$Validation$.$_defaultValidatorFactories$);
  };
  $goog$exportPath_$$("Validation.getDefaultValidatorFactory", $oj$$6$$.$Validation$.$getDefaultValidatorFactory$, $oj$$6$$);
  $oj$$6$$.$Validation$.$__registerDefaultConverterFactory$ = function $$oj$$6$$$$Validation$$$__registerDefaultConverterFactory$$($name$$69$$, $instance$$8$$) {
    var $contractDef$$ = $oj$$6$$.$Validation$.$_CONTRACTS$.converter;
    $oj$$6$$.$Validation$.$_registerFactory$($name$$69$$, $instance$$8$$, $oj$$6$$.$Validation$.$_defaultConverterFactories$, $contractDef$$);
    $oj$$6$$.$Validation$.$_registerFactory$($name$$69$$, $instance$$8$$, $oj$$6$$.$Validation$.$_converterFactories$, $contractDef$$);
  };
  $oj$$6$$.$Validation$.$__registerDefaultValidatorFactory$ = function $$oj$$6$$$$Validation$$$__registerDefaultValidatorFactory$$($name$$70$$, $instance$$9$$) {
    var $contractDef$$1$$ = $oj$$6$$.$Validation$.$_CONTRACTS$.validator;
    $oj$$6$$.$Validation$.$_registerFactory$($name$$70$$, $instance$$9$$, $oj$$6$$.$Validation$.$_defaultValidatorFactories$, $contractDef$$1$$);
    $oj$$6$$.$Validation$.$_registerFactory$($name$$70$$, $instance$$9$$, $oj$$6$$.$Validation$.$_validatorFactories$, $contractDef$$1$$);
  };
  $oj$$6$$.$Validation$.$_doImplementsCheck$ = function $$oj$$6$$$$Validation$$$_doImplementsCheck$$($instance$$10$$, $type$$73$$, $typeName$$3$$) {
    if ($type$$73$$ && !$oj$$6$$.$Validation$.$_quacksLike$($instance$$10$$, $type$$73$$)) {
      throw Error("Factory instance does not implement the methods expected by the factory of type " + $typeName$$3$$);
    }
  };
  $oj$$6$$.$Validation$.$_getFactory$ = function $$oj$$6$$$$Validation$$$_getFactory$$($name$$71$$, $factories$$) {
    $oj$$6$$.$Assert$.$assertString$($name$$71$$);
    var $cachedInstance$$ = null;
    $name$$71$$ && ($name$$71$$ = $name$$71$$.toLowerCase(), $cachedInstance$$ = ($factories$$[$name$$71$$] || {}).instance || null);
    return $cachedInstance$$;
  };
  $oj$$6$$.$Validation$.$_quacksLike$ = function $$oj$$6$$$$Validation$$$_quacksLike$$($thingie$$, $duck$$) {
    var $valid$$5$$ = !0, $property$$11$$;
    $oj$$6$$.$Assert$.$assertObject$($thingie$$);
    $oj$$6$$.$Assert$.$assertObject$($duck$$);
    for ($property$$11$$ in $duck$$) {
      if ($duck$$.hasOwnProperty($property$$11$$) && "function" === typeof $duck$$[$property$$11$$] && !$thingie$$[$property$$11$$] && "function" !== typeof $thingie$$[$property$$11$$]) {
        $valid$$5$$ = !1;
        break;
      }
    }
    return $valid$$5$$;
  };
  $oj$$6$$.$Validation$.$_registerFactory$ = function $$oj$$6$$$$Validation$$$_registerFactory$$($name$$72$$, $instance$$11$$, $factories$$1$$, $contractDef$$2$$) {
    $oj$$6$$.$Assert$.$assertString$($name$$72$$);
    $oj$$6$$.$Assert$.$assertObject$($instance$$11$$);
    if ($name$$72$$) {
      var $props$$6$$ = {};
      $props$$6$$.instance = $instance$$11$$;
      $oj$$6$$.$Validation$.$_doImplementsCheck$($instance$$11$$, $contractDef$$2$$.type, $contractDef$$2$$.name);
      $factories$$1$$[$name$$72$$.toLowerCase()] = $props$$6$$;
    }
  };
  $oj$$6$$.$ConverterFactory$ = {CONVERTER_TYPE_NUMBER:"number", CONVERTER_TYPE_DATETIME:"datetime", createConverter:function $$oj$$6$$$$ConverterFactory$$createConverter$() {
  }};
  $goog$exportPath_$$("ConverterFactory", $oj$$6$$.$ConverterFactory$, $oj$$6$$);
  $oj$$6$$.$ValidatorFactory$ = {VALIDATOR_TYPE_REQUIRED:"required", VALIDATOR_TYPE_REGEXP:"regexp", VALIDATOR_TYPE_NUMBERRANGE:"numberRange", VALIDATOR_TYPE_LENGTH:"length", VALIDATOR_TYPE_DATETIMERANGE:"dateTimeRange", VALIDATOR_TYPE_DATERESTRICTION:"dateRestriction", createValidator:function $$oj$$6$$$$ValidatorFactory$$createValidator$() {
  }};
  $goog$exportPath_$$("ValidatorFactory", $oj$$6$$.$ValidatorFactory$, $oj$$6$$);
  $oj$$6$$.$Converter$ = function $$oj$$6$$$$Converter$$($options$$113$$) {
    this.Init($options$$113$$);
  };
  $goog$exportPath_$$("Converter", $oj$$6$$.$Converter$, $oj$$6$$);
  $oj$$6$$.$Object$.$createSubclass$($oj$$6$$.$Converter$, $oj$$6$$.$Object$, "oj.Converter");
  $oj$$6$$.$Converter$.prototype.Init = function $$oj$$6$$$$Converter$$$Init$($options$$114$$) {
    $oj$$6$$.$Converter$.$superclass$.Init.call(this);
    this.$_options$ = $options$$114$$;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("Converter.prototype.Init", {Init:$oj$$6$$.$Converter$.prototype.Init});
  $oj$$6$$.$Converter$.prototype.$getHint$ = function $$oj$$6$$$$Converter$$$$getHint$$() {
    $oj$$6$$.$Assert$.$failedInAbstractFunction$();
    return null;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("Converter.prototype.getHint", {$getHint$:$oj$$6$$.$Converter$.prototype.$getHint$});
  $oj$$6$$.$Converter$.prototype.$getOptions$ = function $$oj$$6$$$$Converter$$$$getOptions$$() {
    return this.$_options$ || {};
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("Converter.prototype.getOptions", {$getOptions$:$oj$$6$$.$Converter$.prototype.$getOptions$});
  $oj$$6$$.$Converter$.prototype.parse = function $$oj$$6$$$$Converter$$$parse$() {
    $oj$$6$$.$Assert$.$failedInAbstractFunction$();
    return null;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("Converter.prototype.parse", {parse:$oj$$6$$.$Converter$.prototype.parse});
  $oj$$6$$.$Converter$.prototype.format = function $$oj$$6$$$$Converter$$$format$() {
    $oj$$6$$.$Assert$.$failedInAbstractFunction$();
    return null;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("Converter.prototype.format", {format:$oj$$6$$.$Converter$.prototype.format});
  $oj$$6$$.$Converter$.prototype.resolvedOptions = function $$oj$$6$$$$Converter$$$resolvedOptions$() {
    var $resolved$$ = {};
    $$$$6$$.extend($resolved$$, this.$_options$);
    return $resolved$$;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("Converter.prototype.resolvedOptions", {resolvedOptions:$oj$$6$$.$Converter$.prototype.resolvedOptions});
  $oj$$6$$.$ConverterError$ = function $$oj$$6$$$$ConverterError$$($summary$$6$$, $detail$$9$$) {
    var $message$$31$$ = new $oj$$6$$.$Message$($summary$$6$$, $detail$$9$$, $oj$$6$$.$Message$.$SEVERITY_LEVEL$.ERROR);
    this.Init($message$$31$$);
  };
  $goog$exportPath_$$("ConverterError", $oj$$6$$.$ConverterError$, $oj$$6$$);
  $oj$$6$$.$ConverterError$.prototype = Error();
  $oj$$6$$.$ConverterError$.prototype.Init = function $$oj$$6$$$$ConverterError$$$Init$($message$$32$$) {
    var $detail$$10$$ = $message$$32$$.detail, $summary$$7$$ = $message$$32$$.summary;
    this.$_message$ = $message$$32$$;
    this.name = "Converter Error";
    this.message = $detail$$10$$ || $summary$$7$$;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("ConverterError.prototype.Init", {Init:$oj$$6$$.$ConverterError$.prototype.Init});
  $oj$$6$$.$ConverterError$.prototype.$getMessage$ = function $$oj$$6$$$$ConverterError$$$$getMessage$$() {
    return this.$_message$;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("ConverterError.prototype.getMessage", {$getMessage$:$oj$$6$$.$ConverterError$.prototype.$getMessage$});
  $oj$$6$$.$NumberConverter$ = function $$oj$$6$$$$NumberConverter$$() {
    this.Init();
  };
  $goog$exportPath_$$("NumberConverter", $oj$$6$$.$NumberConverter$, $oj$$6$$);
  $oj$$6$$.$Object$.$createSubclass$($oj$$6$$.$NumberConverter$, $oj$$6$$.$Converter$, "oj.NumberConverter");
  $oj$$6$$.$NumberConverter$.prototype.Init = function $$oj$$6$$$$NumberConverter$$$Init$($options$$115$$) {
    $oj$$6$$.$NumberConverter$.$superclass$.Init.call(this, $options$$115$$);
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("NumberConverter.prototype.Init", {Init:$oj$$6$$.$NumberConverter$.prototype.Init});
  $oj$$6$$.$NumberConverter$.prototype.format = function $$oj$$6$$$$NumberConverter$$$format$($value$$95$$) {
    return $oj$$6$$.$NumberConverter$.$superclass$.format.call(this, $value$$95$$);
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("NumberConverter.prototype.format", {format:$oj$$6$$.$NumberConverter$.prototype.format});
  $oj$$6$$.$NumberConverter$.prototype.parse = function $$oj$$6$$$$NumberConverter$$$parse$($value$$96$$) {
    return $oj$$6$$.$NumberConverter$.$superclass$.parse.call(this, $value$$96$$);
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("NumberConverter.prototype.parse", {parse:$oj$$6$$.$NumberConverter$.prototype.parse});
  $oj$$6$$.$DateTimeConverter$ = function $$oj$$6$$$$DateTimeConverter$$($options$$116$$) {
    this.Init($options$$116$$);
  };
  $goog$exportPath_$$("DateTimeConverter", $oj$$6$$.$DateTimeConverter$, $oj$$6$$);
  $oj$$6$$.$Object$.$createSubclass$($oj$$6$$.$DateTimeConverter$, $oj$$6$$.$Converter$, "oj.DateTimeConverter");
  $oj$$6$$.$DateTimeConverter$.prototype.Init = function $$oj$$6$$$$DateTimeConverter$$$Init$($options$$117$$) {
    $oj$$6$$.$DateTimeConverter$.$superclass$.Init.call(this, $options$$117$$);
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateTimeConverter.prototype.Init", {Init:$oj$$6$$.$DateTimeConverter$.prototype.Init});
  $oj$$6$$.$DateTimeConverter$.prototype.format = function $$oj$$6$$$$DateTimeConverter$$$format$($value$$97$$) {
    return $oj$$6$$.$DateTimeConverter$.$superclass$.format.call(this, $value$$97$$);
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateTimeConverter.prototype.format", {format:$oj$$6$$.$DateTimeConverter$.prototype.format});
  $oj$$6$$.$DateTimeConverter$.prototype.$isHourInDaySet$ = function $$oj$$6$$$$DateTimeConverter$$$$isHourInDaySet$$() {
    $oj$$6$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateTimeConverter.prototype.isHourInDaySet", {$isHourInDaySet$:$oj$$6$$.$DateTimeConverter$.prototype.$isHourInDaySet$});
  $oj$$6$$.$DateTimeConverter$.prototype.$isHourInAMPMSet$ = function $$oj$$6$$$$DateTimeConverter$$$$isHourInAMPMSet$$() {
    $oj$$6$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateTimeConverter.prototype.isHourInAMPMSet", {$isHourInAMPMSet$:$oj$$6$$.$DateTimeConverter$.prototype.$isHourInAMPMSet$});
  $oj$$6$$.$DateTimeConverter$.prototype.$isMinuteSet$ = function $$oj$$6$$$$DateTimeConverter$$$$isMinuteSet$$() {
    $oj$$6$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateTimeConverter.prototype.isMinuteSet", {$isMinuteSet$:$oj$$6$$.$DateTimeConverter$.prototype.$isMinuteSet$});
  $oj$$6$$.$DateTimeConverter$.prototype.$isSecondSet$ = function $$oj$$6$$$$DateTimeConverter$$$$isSecondSet$$() {
    $oj$$6$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateTimeConverter.prototype.isSecondSet", {$isSecondSet$:$oj$$6$$.$DateTimeConverter$.prototype.$isSecondSet$});
  $oj$$6$$.$DateTimeConverter$.prototype.$isMilliSecondSet$ = function $$oj$$6$$$$DateTimeConverter$$$$isMilliSecondSet$$() {
    $oj$$6$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateTimeConverter.prototype.isMilliSecondSet", {$isMilliSecondSet$:$oj$$6$$.$DateTimeConverter$.prototype.$isMilliSecondSet$});
  $oj$$6$$.$DateTimeConverter$.prototype.$isYearSet$ = function $$oj$$6$$$$DateTimeConverter$$$$isYearSet$$() {
    $oj$$6$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateTimeConverter.prototype.isYearSet", {$isYearSet$:$oj$$6$$.$DateTimeConverter$.prototype.$isYearSet$});
  $oj$$6$$.$DateTimeConverter$.prototype.$isMonthSet$ = function $$oj$$6$$$$DateTimeConverter$$$$isMonthSet$$() {
    $oj$$6$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateTimeConverter.prototype.isMonthSet", {$isMonthSet$:$oj$$6$$.$DateTimeConverter$.prototype.$isMonthSet$});
  $oj$$6$$.$DateTimeConverter$.prototype.$isDaySet$ = function $$oj$$6$$$$DateTimeConverter$$$$isDaySet$$() {
    $oj$$6$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateTimeConverter.prototype.isDaySet", {$isDaySet$:$oj$$6$$.$DateTimeConverter$.prototype.$isDaySet$});
  $oj$$6$$.$DateTimeConverter$.prototype.$isDayNameSet$ = function $$oj$$6$$$$DateTimeConverter$$$$isDayNameSet$$() {
    $oj$$6$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateTimeConverter.prototype.isDayNameSet", {$isDayNameSet$:$oj$$6$$.$DateTimeConverter$.prototype.$isDayNameSet$});
  $oj$$6$$.$DateTimeConverter$.prototype.parse = function $$oj$$6$$$$DateTimeConverter$$$parse$($value$$98$$) {
    return $oj$$6$$.$DateTimeConverter$.$superclass$.parse.call(this, $value$$98$$);
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateTimeConverter.prototype.parse", {parse:$oj$$6$$.$DateTimeConverter$.prototype.parse});
  $oj$$6$$.$Validator$ = function $$oj$$6$$$$Validator$$() {
    this.Init();
  };
  $goog$exportPath_$$("Validator", $oj$$6$$.$Validator$, $oj$$6$$);
  $oj$$6$$.$Object$.$createSubclass$($oj$$6$$.$Validator$, $oj$$6$$.$Object$, "oj.Validator");
  $oj$$6$$.$Validator$.prototype.Init = function $$oj$$6$$$$Validator$$$Init$() {
    $oj$$6$$.$Validator$.$superclass$.Init.call(this);
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("Validator.prototype.Init", {Init:$oj$$6$$.$Validator$.prototype.Init});
  $oj$$6$$.$Validator$.prototype.validate = function $$oj$$6$$$$Validator$$$validate$() {
    $oj$$6$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("Validator.prototype.validate", {validate:$oj$$6$$.$Validator$.prototype.validate});
  $oj$$6$$.$Validator$.prototype.$getHint$ = function $$oj$$6$$$$Validator$$$$getHint$$() {
    $oj$$6$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("Validator.prototype.getHint", {$getHint$:$oj$$6$$.$Validator$.prototype.$getHint$});
  $oj$$6$$.$ValidatorError$ = function $$oj$$6$$$$ValidatorError$$($summary$$8$$, $detail$$11$$) {
    var $message$$33$$ = new $oj$$6$$.$Message$($summary$$8$$, $detail$$11$$, $oj$$6$$.$Message$.$SEVERITY_LEVEL$.ERROR);
    this.Init($message$$33$$);
  };
  $goog$exportPath_$$("ValidatorError", $oj$$6$$.$ValidatorError$, $oj$$6$$);
  $oj$$6$$.$ValidatorError$.prototype = Error();
  $oj$$6$$.$ValidatorError$.prototype.Init = function $$oj$$6$$$$ValidatorError$$$Init$($message$$34$$) {
    var $detail$$12$$ = $message$$34$$.detail, $summary$$9$$ = $message$$34$$.summary;
    this.$_message$ = $message$$34$$;
    this.name = "Validator Error";
    this.message = $detail$$12$$ || $summary$$9$$;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("ValidatorError.prototype.Init", {Init:$oj$$6$$.$ValidatorError$.prototype.Init});
  $oj$$6$$.$ValidatorError$.prototype.$getMessage$ = function $$oj$$6$$$$ValidatorError$$$$getMessage$$() {
    return this.$_message$;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("ValidatorError.prototype.getMessage", {$getMessage$:$oj$$6$$.$ValidatorError$.prototype.$getMessage$});
  var $OraDateTimeConverter$$;
  $OraDateTimeConverter$$ = function() {
    function $_init$$() {
      return{format:function($value$$100$$, $localeElements$$1$$, $options$$118$$, $locale$$2$$) {
        if ("number" === typeof $value$$100$$) {
          $value$$100$$ = new Date($value$$100$$);
        } else {
          if ("string" === typeof $value$$100$$) {
            if ("" === $OraI18nUtils$$.trim($value$$100$$)) {
              return null;
            }
            $value$$100$$ = $_parseImpl$$($value$$100$$, $localeElements$$1$$, $options$$118$$, $locale$$2$$);
            $value$$100$$ = $value$$100$$.value;
          }
        }
        if ("Invalid Date" === $value$$100$$.toString()) {
          return "Invalid Date";
        }
        if (2 >= arguments.length || void 0 === $options$$118$$) {
          $options$$118$$ = {year:"numeric", month:"numeric", day:"numeric"};
        }
        var $ret$$7$$ = $_formatImpl$$($value$$100$$, $localeElements$$1$$, $options$$118$$), $numberingSystemKey$$ = $OraI18nUtils$$.$getLanguageExtension$($locale$$2$$, "nu");
        void 0 === $OraI18nUtils$$.$numeringSystems$[$numberingSystemKey$$] && ($numberingSystemKey$$ = "latn");
        if ("latn" !== $numberingSystemKey$$) {
          var $idx$$, $nativeRet$$ = [];
          for ($idx$$ = 0;$idx$$ < $ret$$7$$.length;$idx$$++) {
            "0" <= $ret$$7$$[$idx$$] && "9" >= $ret$$7$$[$idx$$] ? $nativeRet$$.push($OraI18nUtils$$.$numeringSystems$[$numberingSystemKey$$][$ret$$7$$[$idx$$]]) : $nativeRet$$.push($ret$$7$$[$idx$$]);
          }
          return $nativeRet$$.join("");
        }
        return $ret$$7$$;
      }, $formatRelative$:function($value$$101$$, $localeElements$$2$$, $options$$119$$) {
        return $_formatRelativeImpl$$($value$$101$$, $localeElements$$2$$, $options$$119$$);
      }, parse:function($str$$13$$, $localeElements$$3$$, $options$$120$$, $locale$$3$$) {
        return $_parseImpl$$($str$$13$$, $localeElements$$3$$, $options$$120$$, $locale$$3$$);
      }, resolvedOptions:function($localeElements$$4$$, $options$$121$$, $locale$$4$$) {
        if (3 > arguments.length || void 0 === $locale$$4$$) {
          $locale$$4$$ = $OraI18nUtils$$.$getLocaleElementsMainNodeKey$($localeElements$$4$$);
        }
        if (2 > arguments.length || void 0 === $options$$121$$) {
          $options$$121$$ = {year:"numeric", month:"numeric", day:"numeric"};
        }
        var $ecma_fmtType_patternFromOptions$$ = !1, $numberingSystemKey$$1_result$$5$$;
        $numberingSystemKey$$1_result$$5$$ = $OraI18nUtils$$.$getLanguageExtension$($locale$$4$$, "nu");
        void 0 === $OraI18nUtils$$.$numeringSystems$[$numberingSystemKey$$1_result$$5$$] && ($numberingSystemKey$$1_result$$5$$ = "latn");
        if (void 0 !== $options$$121$$ && void 0 !== $options$$121$$.pattern) {
          return $numberingSystemKey$$1_result$$5$$ = $_getResolvedOptionsFromPattern$$($locale$$4$$, $numberingSystemKey$$1_result$$5$$, $options$$121$$.pattern), $numberingSystemKey$$1_result$$5$$.pattern = $options$$121$$.pattern, $numberingSystemKey$$1_result$$5$$;
        }
        if (void 0 !== $options$$121$$) {
          $numberingSystemKey$$1_result$$5$$ = {locale:$locale$$4$$, numberingSystem:$numberingSystemKey$$1_result$$5$$, calendar:"gregorian"};
          var $count$$16_getOption_tStyle$$ = 0;
          for ($count$$16_getOption_tStyle$$ in $options$$121$$) {
            $count$$16_getOption_tStyle$$++;
          }
          if (0 == $count$$16_getOption_tStyle$$) {
            return $numberingSystemKey$$1_result$$5$$.year = "numeric", $numberingSystemKey$$1_result$$5$$.month = "numeric", $numberingSystemKey$$1_result$$5$$.day = "numeric", $numberingSystemKey$$1_result$$5$$;
          }
          var $count$$16_getOption_tStyle$$ = $OraI18nUtils$$.$getGetOption$($options$$121$$, "OraDateTimeConverter.resolvedOptions"), $dStyle_option$$10$$ = $count$$16_getOption_tStyle$$("year", "string", ["2-digit", "numeric"]);
          void 0 !== $dStyle_option$$10$$ && ($numberingSystemKey$$1_result$$5$$.year = $dStyle_option$$10$$, $ecma_fmtType_patternFromOptions$$ = !0);
          $dStyle_option$$10$$ = $count$$16_getOption_tStyle$$("era", "string", ["narrow", "short", "long"]);
          void 0 !== $dStyle_option$$10$$ && ($numberingSystemKey$$1_result$$5$$.era = $dStyle_option$$10$$, $ecma_fmtType_patternFromOptions$$ = !0);
          $dStyle_option$$10$$ = $count$$16_getOption_tStyle$$("month", "string", ["2-digit", "numeric", "narrow", "short", "long"]);
          void 0 !== $dStyle_option$$10$$ && ($numberingSystemKey$$1_result$$5$$.month = $dStyle_option$$10$$, $ecma_fmtType_patternFromOptions$$ = !0);
          $dStyle_option$$10$$ = $count$$16_getOption_tStyle$$("day", "string", ["2-digit", "numeric"]);
          void 0 !== $dStyle_option$$10$$ && ($numberingSystemKey$$1_result$$5$$.day = $dStyle_option$$10$$, $ecma_fmtType_patternFromOptions$$ = !0);
          $dStyle_option$$10$$ = $count$$16_getOption_tStyle$$("weekday", "string", ["narrow", "short", "long"]);
          void 0 !== $dStyle_option$$10$$ && ($numberingSystemKey$$1_result$$5$$.weekday = $dStyle_option$$10$$, $ecma_fmtType_patternFromOptions$$ = !0);
          $dStyle_option$$10$$ = $count$$16_getOption_tStyle$$("hour", "string", ["2-digit", "numeric"]);
          void 0 !== $dStyle_option$$10$$ && ($numberingSystemKey$$1_result$$5$$.hour = $dStyle_option$$10$$, $ecma_fmtType_patternFromOptions$$ = !0, $dStyle_option$$10$$ = $count$$16_getOption_tStyle$$("hour12", "boolean", [!0, !1]), void 0 === $dStyle_option$$10$$ && ($dStyle_option$$10$$ = $_isHour12$$($localeElements$$4$$)), $numberingSystemKey$$1_result$$5$$.hour12 = $dStyle_option$$10$$);
          $dStyle_option$$10$$ = $count$$16_getOption_tStyle$$("minute", "string", ["2-digit", "numeric"]);
          void 0 !== $dStyle_option$$10$$ && ($numberingSystemKey$$1_result$$5$$.minute = $dStyle_option$$10$$, $ecma_fmtType_patternFromOptions$$ = !0);
          $dStyle_option$$10$$ = $count$$16_getOption_tStyle$$("second", "string", ["2-digit", "numeric"]);
          void 0 !== $dStyle_option$$10$$ && ($numberingSystemKey$$1_result$$5$$.second = $dStyle_option$$10$$, $ecma_fmtType_patternFromOptions$$ = !0);
          $numberingSystemKey$$1_result$$5$$["two-digit-year-start"] = $_get2DigitYearStart$$($options$$121$$);
          if (!$ecma_fmtType_patternFromOptions$$) {
            $ecma_fmtType_patternFromOptions$$ = $count$$16_getOption_tStyle$$("formatType", "string", ["date", "time", "datetime"], "date");
            $dStyle_option$$10$$ = $count$$16_getOption_tStyle$$("dateFormat", "string", ["short", "medium", "long", "full"], "short");
            $count$$16_getOption_tStyle$$ = $count$$16_getOption_tStyle$$("timeFormat", "string", ["short", "medium", "long", "full"], "short");
            $numberingSystemKey$$1_result$$5$$.formatType = $ecma_fmtType_patternFromOptions$$;
            if ("datetime" === $ecma_fmtType_patternFromOptions$$ || "date" === $ecma_fmtType_patternFromOptions$$) {
              $numberingSystemKey$$1_result$$5$$.dateFormat = $dStyle_option$$10$$;
            }
            if ("datetime" === $ecma_fmtType_patternFromOptions$$ || "time" === $ecma_fmtType_patternFromOptions$$) {
              $numberingSystemKey$$1_result$$5$$.timeFormat = $count$$16_getOption_tStyle$$;
            }
            return $numberingSystemKey$$1_result$$5$$;
          }
          $numberingSystemKey$$1_result$$5$$.patternFromOptions = $_expandFormat$$($options$$121$$, $localeElements$$4$$, "OraDateTimeConverter.resolvedOptions");
          return $numberingSystemKey$$1_result$$5$$;
        }
        $ecma_fmtType_patternFromOptions$$ = $_expandFormat$$({year:"numeric", month:"numeric", day:"numeric"}, $localeElements$$4$$, "OraDateTimeConverter.resolvedOptions");
        return{calendar:"gregorian", locale:$locale$$4$$, numberingSystem:$numberingSystemKey$$1_result$$5$$, year:"numeric", month:"numeric", day:"numeric", patternFromOptions:$ecma_fmtType_patternFromOptions$$};
      }};
    }
    var $_appendPreOrPostMatch$$, $_expandFormat$$, $_parseExact$$, $_formatImpl$$, $_parseImpl$$, $_formatRelativeImpl$$, $_throwInvalidDateFormat$$, $_getResolvedOptionsFromPattern$$, $_dateTimeStyle$$, $_get2DigitYearStart$$, $_isHour12$$, $_dateTimeStyleFromPattern$$, $_expandPredefinedStylesFormat$$, $_localeDataCache$$ = {}, $_isLeapYear$$, $_getDaysInMonth$$, $instance$$12$$, $_toAvailableFormatsKeys$$, $_expandAvailableDateFormatsPattern$$, $_expandAvailableTimeFormatsPattern$$, $_basicFormatMatcher$$, 
    $_appendToKey$$, $_getDaysDif$$, $_getDayIndex$$, $_isSameYear$$, $_isNextYear$$, $_isPrevYear$$, $_isSameMonth$$, $_isNextMonth$$, $_isPrevMonth$$, $_isSameWeek$$, $_isNextWeek$$, $_isPrevWeek$$, $_isSameDay$$, $_isNextDay$$, $_isPrevDay$$, $_expandYear$$, $_getTokenIndex$$, $_parseLenient$$, $_parseLenientyMEd$$, $_parseLenientyMMMEd$$, $_parseLenienthms$$, $_getDayIndex1$$, $_getMonthIndex$$, $_getParseRegExp$$, $_validateRange$$, $_arrayIndexOfDay$$, $_arrayIndexOfMonth$$, $_throwDateFormatMismatch$$, 
    $_throwWeekdayMismatch$$, $_getTimePart$$, $_getNameIndex$$, $_getWeekdayName$$, $_YEAR_AND_DATE_REGEXP$$ = /(\d{1,4})\D+?(\d{1,4})/g, $_YMD_REGEXP$$ = /(\d{1,4})\D+?(\d{1,4})\D+?(\d{1,4})/g, $_MONTH_REGEXP_FMT$$ = /^[M][^M]|[^M]M[^M]/g, $_MONTH_REGEXP_STD$$ = /^[L][^L]|[^L]L[^L]/g, $_DAY_REGEXP$$ = /^[d][^d]|[^d]d[^d]/g, $_HOUR_REGEXP$$ = /(?:^|[^h])h[^h]|[^H]H[^H]|[^k]k[^k]|[^K]K[^K]/, $_TIME_REGEXP$$ = /(\d{1,2})(?:\D+?(\d{1,2}))?(?:\D+?(\d{1,2}))?(?:\D+?(\d{1,3}))?/g, $_TIME_FORMAT_REGEXP$$ = 
    /h|H|K|k/g, $_ESCAPE_REGEXP$$ = /([\^\$\.\*\+\?\|\[\]\(\)\{\}])/g, $_TOKEN_REGEXP$$ = /ccccc|cccc|ccc|cc|c|EEEEE|EEEE|EEE|EE|E|dd|d|MMMMM|MMMM|MMM|MM|M|LLLLL|LLLL|LLL|LL|L|yyyy|yy|y|hh|h|HH|H|KK|K|kk|k|mm|m|ss|s|aa|a|SS|S|zzzz|zzz|zz|z|GGGGG|GGGG|GGG|GG|G/g, $_DAYS_INDEXES$$ = {0:"sun", 1:"mon", 2:"tue", 3:"wed", 4:"thu", 5:"fri", 6:"sat"}, $_PROPERTIES_MAP$$ = {MMM:{token:"months", style:"format", mLen:"abbreviated", matchIndex:0, key:"month", value:"short", regExp:"(\\D+|\\d\\d?\\D|\\d\\d?|\\D+\\d\\d?)"}, 
    MMMM:{token:"months", style:"format", mLen:"wide", matchIndex:0, key:"month", value:"long", regExp:"(\\D+|\\d\\d?\\D|\\d\\d?|\\D+\\d\\d?)"}, MMMMM:{token:"months", style:"format", mLen:"narrow", matchIndex:0, key:"month", value:"narrow", regExp:"(\\D+|\\d\\d?\\D|\\d\\d?|\\D+\\d\\d?)"}, LLL:{token:"months", style:"stand-alone", mLen:"abbreviated", matchIndex:1, key:"month", value:"short", regExp:"(\\D+|\\d\\d?\\D|\\d\\d?|\\D+\\d\\d?)"}, LLLL:{token:"months", style:"stand-alone", mLen:"wide", matchIndex:1, 
    key:"month", value:"long", regExp:"(\\D+|\\d\\d?\\D|\\d\\d?|\\D+\\d\\d?)"}, LLLLL:{token:"months", style:"stand-alone", mLen:"narrow", matchIndex:1, key:"month", value:"narrow", regExp:"(\\D+|\\d\\d?\\D|\\d\\d?|\\D+\\d\\d?)"}, E:{token:"days", style:"format", dLen:"abbreviated", matchIndex:0, key:"weekday", value:"short", regExp:"(\\D+|\\D+\\d\\d?)"}, EE:{token:"days", style:"format", dLen:"abbreviated", matchIndex:0, key:"weekday", value:"short", regExp:"(\\D+|\\D+\\d\\d?)"}, EEE:{token:"days", 
    style:"format", dLen:"abbreviated", matchIndex:0, key:"weekday", value:"short", regExp:"(\\D+|\\D+\\d\\d?)"}, EEEE:{token:"days", style:"format", dLen:"wide", matchIndex:0, key:"weekday", value:"long", regExp:"(\\D+|\\D+\\d\\d?)"}, EEEEE:{token:"days", style:"format", dLen:"narrow", matchIndex:0, key:"weekday", value:"narrow", regExp:"(\\D+|\\D+\\d\\d?)"}, c:{token:"days", style:"stand-alone", dLen:"abbreviated", matchIndex:1, key:"weekday", value:"short", regExp:"(\\D+|\\D+\\d\\d?)"}, cc:{token:"days", 
    style:"stand-alone", dLen:"abbreviated", matchIndex:1, key:"weekday", value:"short", regExp:"(\\D+|\\D+\\d\\d?)"}, ccc:{token:"days", style:"stand-alone", dLen:"abbreviated", matchIndex:1, key:"weekday", value:"short", regExp:"(\\D+|\\D+\\d\\d?)"}, cccc:{token:"days", style:"stand-alone", dLen:"wide", matchIndex:1, key:"weekday", value:"long", regExp:"(\\D+|\\D+\\d\\d?)"}, ccccc:{token:"days", style:"stand-alone", dLen:"narrow", matchIndex:1, key:"weekday", value:"narrow", regExp:"(\\D+|\\D+\\d\\d?)"}, 
    h:{token:"time", timePart:"hour", start1:0, end1:11, start2:1, end2:12, key:"hour", value:"numeric", regExp:"(\\d\\d?)"}, hh:{token:"time", timePart:"hour", start1:0, end1:11, start2:1, end2:12, key:"hour", value:"2-digit", regExp:"(\\d\\d?)"}, K:{token:"time", timePart:"hour", start1:0, end1:11, start2:0, end2:11, key:"hour", value:"numeric", regExp:"(\\d\\d?)"}, KK:{token:"time", timePart:"hour", start1:0, end1:11, start2:0, end2:11, key:"hour", value:"2-digit", regExp:"(\\d\\d?)"}, H:{token:"time", 
    timePart:"hour", start1:0, end1:23, start2:0, end2:23, key:"hour", value:"numeric", regExp:"(\\d\\d?)"}, HH:{token:"time", timePart:"hour", start1:0, end1:23, start2:0, end2:23, key:"hour", value:"2-digit", regExp:"(\\d\\d?)"}, k:{token:"time", timePart:"hour", start1:0, end1:23, start2:1, end2:24, key:"hour", value:"numeric", regExp:"(\\d\\d?)"}, kk:{token:"time", timePart:"hour", start1:0, end1:23, start2:1, end2:24, key:"hour", value:"2-digit", regExp:"(\\d\\d?)"}, m:{token:"time", timePart:"minute", 
    start1:0, end1:59, start2:0, end2:59, key:"minute", value:"numeric", regExp:"(\\d\\d?)"}, mm:{token:"time", timePart:"minute", start1:0, end1:59, start2:0, end2:59, key:"minute", value:"2-digit", regExp:"(\\d\\d?)"}, s:{token:"time", timePart:"second", start1:0, end1:59, start2:0, end2:59, key:"second", value:"numeric", regExp:"(\\d\\d?)"}, ss:{token:"time", timePart:"second", start1:0, end1:59, start2:0, end2:59, key:"second", value:"2-digit", regExp:"(\\d\\d?)"}, S:{token:"time", timePart:"millisec", 
    start1:0, end1:999, start2:0, end2:999, key:"millisecond", value:"numeric", regExp:"(\\d{1,3})"}, SS:{token:"time", timePart:"millisec", start1:0, end1:999, start2:0, end2:999, key:"millisecond", value:"numeric", regExp:"(\\d{1,3})"}, d:{token:"dayOfMonth", key:"day", value:"numeric", getPartIdx:2, regExp:"(\\d\\d?)"}, dd:{token:"dayOfMonth", key:"day", value:"2-digit", getPartIdx:2, regExp:"(\\d\\d?)"}, M:{token:"monthIndex", key:"month", value:"numeric", getPartIdx:1, regExp:"(\\d\\d?)"}, MM:{token:"monthIndex", 
    key:"month", value:"2-digit", getPartIdx:1, regExp:"(\\d\\d?)"}, L:{token:"monthIndex", key:"month", value:"numeric", getPartIdx:1, regExp:"(\\d\\d?)"}, LL:{token:"monthIndex", key:"month", value:"2-digit", getPartIdx:1, regExp:"(\\d\\d?)"}, y:{token:"year", key:"year", value:"numeric", regExp:"(\\d{1,4})"}, yy:{token:"year", key:"year", value:"2-digit", regExp:"(\\d\\d?)"}, yyyy:{token:"year", key:"year", value:"numeric", regExp:"(\\d{1,4})"}, a:{token:"ampm", key:"hour12", value:!0, regExp:"(\\D*)"}, 
    z:{token:"tz", key:"timeZoneName", value:"short", regExp:"([+-]?\\d{1,4})"}, zz:{token:"tz", key:"timeZoneName", value:"short", regExp:"([+-]?\\d{1,4})"}, zzz:{token:"tz", key:"timeZoneName", value:"short", regExp:"([+-]?\\d{1,4})"}, zzzz:{token:"tz", key:"timeZoneName", value:"long", regExp:"([+-]?\\d{1,4})"}, G:{token:"era", key:"era", value:"short", regExp:"(\\D+|\\D+\\d\\d?)"}, GG:{token:"era", key:"era", value:"short", regExp:"(\\D+|\\D+\\d\\d?)"}, GGG:{token:"era", key:"era", value:"short", 
    regExp:"(\\D+|\\D+\\d\\d?)"}, GGGG:{token:"era", key:"era", value:"long", regExp:"(\\D+|\\D+\\d\\d?)"}, GGGGG:{token:"era", key:"era", value:"narrow", regExp:"(\\D+|\\D+\\d\\d?)"}, "/":{token:"slash", regExp:"(\\/)"}};
    $_get2DigitYearStart$$ = function $$_get2DigitYearStart$$$($option$$11_options$$122$$) {
      $option$$11_options$$122$$ = $option$$11_options$$122$$["two-digit-year-start"];
      if (void 0 === $option$$11_options$$122$$ || isNaN($option$$11_options$$122$$)) {
        $option$$11_options$$122$$ = 1950;
      }
      return $option$$11_options$$122$$ = parseInt($option$$11_options$$122$$, 10);
    };
    $_isHour12$$ = function $$_isHour12$$$($localeElements$$5$$) {
      var $territory$$ = $OraI18nUtils$$.$parseBCP47$($OraI18nUtils$$.$getLocaleElementsMainNodeKey$($localeElements$$5$$)).region || "001";
      return "h" === $localeElements$$5$$.supplemental.prefferedHours[$territory$$];
    };
    $_isLeapYear$$ = function $$_isLeapYear$$$($y$$35$$) {
      return 0 == $y$$35$$ % 400 ? !0 : 0 == $y$$35$$ % 100 ? !1 : 0 == $y$$35$$ % 4 ? !0 : !1;
    };
    $_getDaysInMonth$$ = function $$_getDaysInMonth$$$($y$$36$$, $m$$11$$) {
      switch($m$$11$$) {
        case 0:
        ;
        case 2:
        ;
        case 4:
        ;
        case 6:
        ;
        case 7:
        ;
        case 9:
        ;
        case 11:
          return 31;
        case 1:
          return $_isLeapYear$$($y$$36$$) ? 29 : 28;
        default:
          return 30;
      }
    };
    $_expandPredefinedStylesFormat$$ = function $$_expandPredefinedStylesFormat$$$($fmtType$$1_options$$123$$, $dateFormats_localeElements$$6_mainNode$$1$$, $caller$$1_dStyle$$1$$) {
      $dateFormats_localeElements$$6_mainNode$$1$$ = $OraI18nUtils$$.$getLocaleElementsMainNode$($dateFormats_localeElements$$6_mainNode$$1$$);
      var $getOption$$1_tStyle$$1$$ = $OraI18nUtils$$.$getGetOption$($fmtType$$1_options$$123$$, $caller$$1_dStyle$$1$$);
      $fmtType$$1_options$$123$$ = $getOption$$1_tStyle$$1$$("formatType", "string", ["date", "time", "datetime"], "date");
      $caller$$1_dStyle$$1$$ = $getOption$$1_tStyle$$1$$("dateFormat", "string", ["short", "medium", "long", "full"], "short");
      var $getOption$$1_tStyle$$1$$ = $getOption$$1_tStyle$$1$$("timeFormat", "string", ["short", "medium", "long", "full"], "short"), $cal_timeFormats$$ = $dateFormats_localeElements$$6_mainNode$$1$$.dates.calendars.gregorian;
      $dateFormats_localeElements$$6_mainNode$$1$$ = $cal_timeFormats$$.dateFormats;
      var $cal_timeFormats$$ = $cal_timeFormats$$.timeFormats, $dStyleFmt$$, $tStyleFmt$$, $format$$7$$;
      switch($caller$$1_dStyle$$1$$) {
        case "full":
          $dStyleFmt$$ = $dateFormats_localeElements$$6_mainNode$$1$$.full;
          break;
        case "long":
          $dStyleFmt$$ = $dateFormats_localeElements$$6_mainNode$$1$$["long"];
          break;
        case "medium":
          $dStyleFmt$$ = $dateFormats_localeElements$$6_mainNode$$1$$.medium;
          break;
        case "short":
          $dStyleFmt$$ = $dateFormats_localeElements$$6_mainNode$$1$$["short"];
      }
      switch($getOption$$1_tStyle$$1$$) {
        case "full":
          $tStyleFmt$$ = $cal_timeFormats$$.full;
          break;
        case "long":
          $tStyleFmt$$ = $cal_timeFormats$$["long"];
          break;
        case "medium":
          $tStyleFmt$$ = $cal_timeFormats$$.medium;
          break;
        case "short":
          $tStyleFmt$$ = $cal_timeFormats$$["short"];
      }
      void 0 === $dStyleFmt$$ || "datetime" !== $fmtType$$1_options$$123$$ && "date" !== $fmtType$$1_options$$123$$ || ($format$$7$$ = $dStyleFmt$$);
      void 0 === $tStyleFmt$$ || "datetime" !== $fmtType$$1_options$$123$$ && "time" !== $fmtType$$1_options$$123$$ || ($format$$7$$ = $format$$7$$ ? $format$$7$$ + " " + $tStyleFmt$$ : $tStyleFmt$$);
      return $format$$7$$;
    };
    $_appendPreOrPostMatch$$ = function $$_appendPreOrPostMatch$$$($preMatch$$, $strings$$) {
      for (var $quoteCount$$ = 0, $escaped$$2$$ = !1, $i$$90$$ = 0, $il$$ = $preMatch$$.length;$i$$90$$ < $il$$;$i$$90$$++) {
        var $c$$18$$ = $preMatch$$.charAt($i$$90$$);
        switch($c$$18$$) {
          case "'":
            $escaped$$2$$ ? $strings$$.push("'") : $quoteCount$$++;
            $escaped$$2$$ = !1;
            break;
          case "\\":
            $escaped$$2$$ && $strings$$.push("\\");
            $escaped$$2$$ = !$escaped$$2$$;
            break;
          default:
            $strings$$.push($c$$18$$), $escaped$$2$$ = !1;
        }
      }
      return $quoteCount$$;
    };
    $_throwInvalidDateFormat$$ = function $$_throwInvalidDateFormat$$$($format$$8$$, $isTime_options$$124$$, $error$$13_m$$12$$) {
      var $isDate_samplePattern$$;
      $isDate_samplePattern$$ = void 0 !== $isTime_options$$124$$.year || void 0 !== $isTime_options$$124$$.month || void 0 !== $isTime_options$$124$$.weekday || void 0 !== $isTime_options$$124$$.day;
      $isTime_options$$124$$ = void 0 !== $isTime_options$$124$$.hour || void 0 !== $isTime_options$$124$$.minute || void 0 !== $isTime_options$$124$$.second;
      $isDate_samplePattern$$ = $isDate_samplePattern$$ && $isTime_options$$124$$ ? "MM/dd/yy hh:mm:ss a" : $isDate_samplePattern$$ ? "MM/dd/yy" : "hh:mm:ss a";
      $error$$13_m$$12$$ = new SyntaxError("Unexpected character(s) " + $error$$13_m$$12$$ + ' encountered in the pattern "' + $format$$8$$ + ' An example of a valid pattern is "' + $isDate_samplePattern$$ + '".');
      $error$$13_m$$12$$.errorInfo = {errorCode:"optionValueInvalid", parameterMap:{propertyName:"pattern", propertyValue:$format$$8$$, "propertyValueHint ":$isDate_samplePattern$$}};
      throw $error$$13_m$$12$$;
    };
    $_basicFormatMatcher$$ = function $$_basicFormatMatcher$$$($dateTimeKeys$$, $availableFormats_localeElements$$7$$, $dateTimeFormats_isDate$$1$$, $hour12$$1$$) {
      $availableFormats_localeElements$$7$$ = $OraI18nUtils$$.$getLocaleElementsMainNode$($availableFormats_localeElements$$7$$).dates.calendars.gregorian.dateTimeFormats.availableFormats;
      $dateTimeFormats_isDate$$1$$ = $dateTimeFormats_isDate$$1$$ ? ["era", "year", "month", "weekday", "day"] : ["weekday", "hour", "minute", "second"];
      var $bestScore$$ = -Infinity, $bestFormat$$ = void 0, $delta$$1_m$$13_match$$1_optionsProp$$, $f$$1$$;
      for ($f$$1$$ in $availableFormats_localeElements$$7$$) {
        var $format$$9$$ = {};
        $format$$9$$.pattern = $availableFormats_localeElements$$7$$[$f$$1$$];
        for (var $score$$ = 0;null !== ($delta$$1_m$$13_match$$1_optionsProp$$ = $_TOKEN_REGEXP$$.exec($f$$1$$));) {
          $delta$$1_m$$13_match$$1_optionsProp$$ = $delta$$1_m$$13_match$$1_optionsProp$$[0], ("h" !== $delta$$1_m$$13_match$$1_optionsProp$$ && "hh" !== $delta$$1_m$$13_match$$1_optionsProp$$ || $hour12$$1$$) && ("H" !== $delta$$1_m$$13_match$$1_optionsProp$$ && "HH" !== $delta$$1_m$$13_match$$1_optionsProp$$ || !$hour12$$1$$) && void 0 !== $_PROPERTIES_MAP$$[$delta$$1_m$$13_match$$1_optionsProp$$] && ($format$$9$$[$_PROPERTIES_MAP$$[$delta$$1_m$$13_match$$1_optionsProp$$].key] = $_PROPERTIES_MAP$$[$delta$$1_m$$13_match$$1_optionsProp$$].value)
          ;
        }
        for (var $property$$12$$ in $dateTimeFormats_isDate$$1$$) {
          $delta$$1_m$$13_match$$1_optionsProp$$ = $dateTimeKeys$$[$dateTimeFormats_isDate$$1$$[$property$$12$$]];
          var $formatProp$$ = $format$$9$$[$dateTimeFormats_isDate$$1$$[$property$$12$$]];
          if (void 0 === $delta$$1_m$$13_match$$1_optionsProp$$ && void 0 !== $formatProp$$) {
            $score$$ -= 20;
          } else {
            if (void 0 !== $delta$$1_m$$13_match$$1_optionsProp$$ && void 0 === $formatProp$$) {
              $score$$ -= 120;
            } else {
              if (void 0 !== $delta$$1_m$$13_match$$1_optionsProp$$ && void 0 !== $formatProp$$) {
                var $values$$8$$ = {"2-digit":0, numeric:1, narrow:2, "short":3, "long":4};
                $delta$$1_m$$13_match$$1_optionsProp$$ = Math.max(Math.min($values$$8$$[$formatProp$$] - $values$$8$$[$delta$$1_m$$13_match$$1_optionsProp$$], 2), -2);
                2 === $delta$$1_m$$13_match$$1_optionsProp$$ ? $score$$ -= 6 : 1 === $delta$$1_m$$13_match$$1_optionsProp$$ ? $score$$ -= 3 : -1 === $delta$$1_m$$13_match$$1_optionsProp$$ ? $score$$ -= 6 : -2 === $delta$$1_m$$13_match$$1_optionsProp$$ && ($score$$ -= 8);
              }
            }
          }
        }
        $score$$ > $bestScore$$ && ($bestScore$$ = $score$$, $bestFormat$$ = $format$$9$$);
      }
      return void 0 !== $bestFormat$$ ? $bestFormat$$.pattern : null;
    };
    $_toAvailableFormatsKeys$$ = function $$_toAvailableFormatsKeys$$$($getOption$$2_options$$125$$, $localeElements$$8$$, $caller$$2_option$$12$$) {
      var $dateKey$$ = "", $timeKey$$ = "", $dateOptions$$ = {}, $timeOptions$$ = {};
      $getOption$$2_options$$125$$ = $OraI18nUtils$$.$getGetOption$($getOption$$2_options$$125$$, $caller$$2_option$$12$$);
      $caller$$2_option$$12$$ = $getOption$$2_options$$125$$("era", "string", ["narrow", "short", "long"]);
      $dateKey$$ += $_appendToKey$$($dateOptions$$, "era", $caller$$2_option$$12$$, {narrow:"GGGGG", "short":"GGG", "long":"GGGG"});
      $caller$$2_option$$12$$ = $getOption$$2_options$$125$$("year", "string", ["2-digit", "numeric"]);
      $dateKey$$ += $_appendToKey$$($dateOptions$$, "year", $caller$$2_option$$12$$, {"2-digit":"yy", numeric:"y"});
      $caller$$2_option$$12$$ = $getOption$$2_options$$125$$("month", "string", ["2-digit", "numeric", "narrow", "short", "long"]);
      $dateKey$$ += $_appendToKey$$($dateOptions$$, "month", $caller$$2_option$$12$$, {"2-digit":"MM", numeric:"M", narrow:"MMMMM", "short":"MMM", "long":"MMMM"});
      $caller$$2_option$$12$$ = $getOption$$2_options$$125$$("weekday", "string", ["narrow", "short", "long"]);
      $dateKey$$ += $_appendToKey$$($dateOptions$$, "weekday", $caller$$2_option$$12$$, {narrow:"EEEEE", "short":"E", "long":"EEEE"});
      $caller$$2_option$$12$$ = $getOption$$2_options$$125$$("day", "string", ["2-digit", "numeric"]);
      var $dateKey$$ = $dateKey$$ + $_appendToKey$$($dateOptions$$, "day", $caller$$2_option$$12$$, {"2-digit":"dd", numeric:"d"}), $hr12$$ = $getOption$$2_options$$125$$("hour12", "boolean", [!0, !1]);
      void 0 === $hr12$$ && ($hr12$$ = $_isHour12$$($localeElements$$8$$));
      $caller$$2_option$$12$$ = $getOption$$2_options$$125$$("hour", "string", ["2-digit", "numeric"]);
      $timeKey$$ = !0 === $hr12$$ ? $timeKey$$ + $_appendToKey$$($timeOptions$$, "hour", $caller$$2_option$$12$$, {"2-digit":"hh", numeric:"h"}) : $timeKey$$ + $_appendToKey$$($timeOptions$$, "hour", $caller$$2_option$$12$$, {"2-digit":"HH", numeric:"H"});
      $caller$$2_option$$12$$ = $getOption$$2_options$$125$$("minute", "string", ["2-digit", "numeric"]);
      $timeKey$$ += $_appendToKey$$($timeOptions$$, "minute", $caller$$2_option$$12$$, {"2-digit":"mm", numeric:"m"});
      $caller$$2_option$$12$$ = $getOption$$2_options$$125$$("second", "string", ["2-digit", "numeric"]);
      $timeKey$$ += $_appendToKey$$($timeOptions$$, "second", $caller$$2_option$$12$$, {"2-digit":"ss", numeric:"s"});
      return[$dateKey$$, $timeKey$$, $dateOptions$$, $timeOptions$$];
    };
    $_appendToKey$$ = function $$_appendToKey$$$($obj$$52$$, $prop$$48$$, $option$$13$$, $pairs$$) {
      return void 0 !== $option$$13$$ ? ($obj$$52$$[$prop$$48$$] = $option$$13$$, $pairs$$[$option$$13$$]) : "";
    };
    $_expandAvailableDateFormatsPattern$$ = function $$_expandAvailableDateFormatsPattern$$$($formatTemplate$$, $getOption$$3_options$$126$$, $caller$$3_match$$2_option$$14$$) {
      var $datePat$$ = $formatTemplate$$;
      $getOption$$3_options$$126$$ = $OraI18nUtils$$.$getGetOption$($getOption$$3_options$$126$$, $caller$$3_match$$2_option$$14$$);
      $caller$$3_match$$2_option$$14$$ = $getOption$$3_options$$126$$("year", "string", ["2-digit", "numeric"]);
      var $pairs$$1$$ = {"2-digit":"yy", numeric:"yyyy"};
      void 0 !== $caller$$3_match$$2_option$$14$$ && ($datePat$$ = $datePat$$.replace(/y{1,4}/, $pairs$$1$$[$caller$$3_match$$2_option$$14$$]));
      $caller$$3_match$$2_option$$14$$ = $getOption$$3_options$$126$$("month", "string", ["2-digit", "numeric", "narrow", "short", "long"]);
      if (void 0 !== $caller$$3_match$$2_option$$14$$) {
        var $pairs$$1$$ = {"2-digit":"MM", numeric:"M", narrow:"MMMMM", "short":"MMM", "long":"MMMM"}, $pairsL$$ = {"2-digit":"LL", numeric:"L", narrow:"LLLLL", "short":"LLL", "long":"LLLL"};
        void 0 !== $pairs$$1$$[$caller$$3_match$$2_option$$14$$] && 2 < $pairs$$1$$[$caller$$3_match$$2_option$$14$$].length ? ($datePat$$ = $datePat$$.replace(/M{3,5}/, $pairs$$1$$[$caller$$3_match$$2_option$$14$$]), $datePat$$ = $datePat$$.replace(/L{3,5}/, $pairsL$$[$caller$$3_match$$2_option$$14$$])) : "2-digit" === $caller$$3_match$$2_option$$14$$ && ($_MONTH_REGEXP_FMT$$.lastIndex = 0, ($caller$$3_match$$2_option$$14$$ = $_MONTH_REGEXP_FMT$$.test($formatTemplate$$)) && ($datePat$$ = $datePat$$.replace("M", 
        "MM")), ($caller$$3_match$$2_option$$14$$ = $_MONTH_REGEXP_STD$$.test($formatTemplate$$)) && ($datePat$$ = $datePat$$.replace("L", "LL")));
      }
      $caller$$3_match$$2_option$$14$$ = $getOption$$3_options$$126$$("weekday", "string", ["narrow", "short", "long"]);
      void 0 !== $caller$$3_match$$2_option$$14$$ && ($datePat$$ = $datePat$$.replace(/E{1,5}/, {narrow:"EEEEE", "short":"EEE", "long":"EEEE"}[$caller$$3_match$$2_option$$14$$]), $datePat$$ = $datePat$$.replace(/c{1,5}/, {narrow:"ccccc", "short":"ccc", "long":"cccc"}[$caller$$3_match$$2_option$$14$$]));
      $caller$$3_match$$2_option$$14$$ = $getOption$$3_options$$126$$("day", "string", ["2-digit", "numeric"]);
      void 0 !== $caller$$3_match$$2_option$$14$$ && "2-digit" === $caller$$3_match$$2_option$$14$$ && ($_DAY_REGEXP$$.lastIndex = 0, ($caller$$3_match$$2_option$$14$$ = $_DAY_REGEXP$$.test($formatTemplate$$)) && ($datePat$$ = $datePat$$.replace("d", "dd")));
      return $datePat$$;
    };
    $_expandAvailableTimeFormatsPattern$$ = function $$_expandAvailableTimeFormatsPattern$$$($formatTemplate$$1$$, $match$$3_options$$127$$, $caller$$4$$) {
      var $len$$3_timePat$$ = $formatTemplate$$1$$;
      "2-digit" === $OraI18nUtils$$.$getGetOption$($match$$3_options$$127$$, $caller$$4$$)("hour", "string", ["2-digit", "numeric"]) && ($_HOUR_REGEXP$$.lastIndex = 0, $match$$3_options$$127$$ = $_HOUR_REGEXP$$.exec($formatTemplate$$1$$), null !== $match$$3_options$$127$$ && ($len$$3_timePat$$ = $match$$3_options$$127$$[0].length - 2, $len$$3_timePat$$ = $formatTemplate$$1$$.replace($match$$3_options$$127$$[0][$len$$3_timePat$$], $match$$3_options$$127$$[0][$len$$3_timePat$$] + $match$$3_options$$127$$[0][$len$$3_timePat$$])));
      return $len$$3_timePat$$;
    };
    $_expandFormat$$ = function $$_expandFormat$$$($options$$128_pattern$$3$$, $localeElements$$9_timeTemplatePattern$$, $caller$$5$$) {
      var $datePattern_dateTemplatePattern_mainNode$$3$$ = $OraI18nUtils$$.$getLocaleElementsMainNode$($localeElements$$9_timeTemplatePattern$$), $locale$$5$$ = $OraI18nUtils$$.$getLocaleElementsMainNodeKey$($localeElements$$9_timeTemplatePattern$$), $getOption$$5_hour12$$2$$ = $OraI18nUtils$$.$getGetOption$($options$$128_pattern$$3$$, $caller$$5$$), $matcher$$ = $getOption$$5_hour12$$2$$("formatMatcher", "string", ["basic", "munger"], "munger"), $count$$17_dateTimeKeys$$1$$ = 0;
      for ($count$$17_dateTimeKeys$$1$$ in $options$$128_pattern$$3$$) {
        $count$$17_dateTimeKeys$$1$$++;
      }
      0 == $count$$17_dateTimeKeys$$1$$ && ($options$$128_pattern$$3$$ = {year:"numeric", month:"numeric", day:"numeric"});
      $count$$17_dateTimeKeys$$1$$ = $_toAvailableFormatsKeys$$($options$$128_pattern$$3$$, $localeElements$$9_timeTemplatePattern$$, $caller$$5$$);
      if (void 0 !== $_localeDataCache$$[$locale$$5$$] && void 0 !== $_localeDataCache$$[$locale$$5$$].dates.calendars.gregorian.dateTimeFormats[$count$$17_dateTimeKeys$$1$$[0] + $count$$17_dateTimeKeys$$1$$[1]]) {
        return $_localeDataCache$$[$locale$$5$$].dates.calendars.gregorian.dateTimeFormats[$count$$17_dateTimeKeys$$1$$[0] + $count$$17_dateTimeKeys$$1$$[1]];
      }
      if ("" === $count$$17_dateTimeKeys$$1$$[0] && "" === $count$$17_dateTimeKeys$$1$$[1]) {
        return $_expandPredefinedStylesFormat$$($options$$128_pattern$$3$$, $localeElements$$9_timeTemplatePattern$$, $caller$$5$$);
      }
      var $availableFormats$$1_timePattern$$ = $datePattern_dateTemplatePattern_mainNode$$3$$.dates.calendars.gregorian.dateTimeFormats.availableFormats, $datePattern_dateTemplatePattern_mainNode$$3$$ = $availableFormats$$1_timePattern$$[$count$$17_dateTimeKeys$$1$$[0]], $getOption$$5_hour12$$2$$ = $getOption$$5_hour12$$2$$("hour12", "boolean", [!0, !1]);
      void 0 === $getOption$$5_hour12$$2$$ && ($getOption$$5_hour12$$2$$ = $_isHour12$$($localeElements$$9_timeTemplatePattern$$));
      void 0 === $datePattern_dateTemplatePattern_mainNode$$3$$ && "" !== $count$$17_dateTimeKeys$$1$$[0] && ($datePattern_dateTemplatePattern_mainNode$$3$$ = $_basicFormatMatcher$$($count$$17_dateTimeKeys$$1$$[2], $localeElements$$9_timeTemplatePattern$$, !0, $getOption$$5_hour12$$2$$), $datePattern_dateTemplatePattern_mainNode$$3$$ = null !== $datePattern_dateTemplatePattern_mainNode$$3$$ ? "basic" === $matcher$$ ? $datePattern_dateTemplatePattern_mainNode$$3$$ : $_expandAvailableDateFormatsPattern$$($datePattern_dateTemplatePattern_mainNode$$3$$, 
      $options$$128_pattern$$3$$, $caller$$5$$) : $count$$17_dateTimeKeys$$1$$[0]);
      $availableFormats$$1_timePattern$$ = $availableFormats$$1_timePattern$$[$count$$17_dateTimeKeys$$1$$[1]];
      void 0 === $availableFormats$$1_timePattern$$ && "" !== $count$$17_dateTimeKeys$$1$$[1] && ($localeElements$$9_timeTemplatePattern$$ = $_basicFormatMatcher$$($count$$17_dateTimeKeys$$1$$[3], $localeElements$$9_timeTemplatePattern$$, !1, $getOption$$5_hour12$$2$$), $availableFormats$$1_timePattern$$ = null !== $localeElements$$9_timeTemplatePattern$$ ? "basic" === $matcher$$ ? $localeElements$$9_timeTemplatePattern$$ : $_expandAvailableTimeFormatsPattern$$($localeElements$$9_timeTemplatePattern$$, 
      $options$$128_pattern$$3$$, $caller$$5$$) : $count$$17_dateTimeKeys$$1$$[1]);
      $options$$128_pattern$$3$$ = $datePattern_dateTemplatePattern_mainNode$$3$$ || "";
      void 0 !== $availableFormats$$1_timePattern$$ && ($options$$128_pattern$$3$$ = "" !== $options$$128_pattern$$3$$ ? $options$$128_pattern$$3$$ + (" " + $availableFormats$$1_timePattern$$) : $availableFormats$$1_timePattern$$);
      void 0 === $_localeDataCache$$[$locale$$5$$] && ($_localeDataCache$$[$locale$$5$$] = {}, $_localeDataCache$$[$locale$$5$$].dates = {}, $_localeDataCache$$[$locale$$5$$].dates.calendars = {}, $_localeDataCache$$[$locale$$5$$].dates.calendars.gregorian = {}, $_localeDataCache$$[$locale$$5$$].dates.calendars.gregorian.dateTimeFormats = {});
      return $_localeDataCache$$[$locale$$5$$].dates.calendars.gregorian.dateTimeFormats[$count$$17_dateTimeKeys$$1$$[0] + $count$$17_dateTimeKeys$$1$$[1]] = $options$$128_pattern$$3$$;
    };
    $_formatImpl$$ = function $$_formatImpl$$$($value$$102$$, $localeElements$$10_ret$$8$$, $options$$129$$) {
      function $_getPart$$($date$$2$$, $part$$3$$) {
        switch($part$$3$$) {
          case 0:
            return $date$$2$$.getFullYear();
          case 1:
            return $date$$2$$.getMonth() + 1;
          case 2:
            return $date$$2$$.getDate();
          case 3:
            return $_DAYS_INDEXES$$[$date$$2$$.getDay()];
        }
      }
      function $_getPaddedPart$$($ret$$9$$, $val$$22_value$$103$$, $idx$$1$$, $len$$4$$) {
        $val$$22_value$$103$$ = $_getPart$$($val$$22_value$$103$$, $idx$$1$$);
        $ret$$9$$.push(1 < $len$$4$$ ? $OraI18nUtils$$.$padZeros$($val$$22_value$$103$$, $len$$4$$) : $val$$22_value$$103$$);
      }
      function $_getTimeParts$$($ret$$10$$, $value$$104$$, $len$$5$$, $currentPart$$1$$, $current$$2$$) {
        var $val$$23$$;
        switch($currentPart$$1$$.timePart) {
          case "hour":
            $val$$23$$ = 11 === $currentPart$$1$$.end1 ? $value$$104$$.getHours() % 12 : $value$$104$$.getHours();
            "h" === $current$$2$$ || "hh" === $current$$2$$ ? 0 === $val$$23$$ && ($val$$23$$ = 12) : "k" !== $current$$2$$ && "kk" !== $current$$2$$ || 0 !== $val$$23$$ || ($val$$23$$ = 24);
            break;
          case "minute":
            $val$$23$$ = $value$$104$$.getMinutes();
            break;
          case "second":
            $val$$23$$ = $value$$104$$.getSeconds();
            break;
          case "millisec":
            $val$$23$$ = $value$$104$$.getMilliseconds();
        }
        $ret$$10$$.push(1 < $len$$5$$ ? $OraI18nUtils$$.$padZeros$($val$$23$$, $len$$5$$) : $val$$23$$);
      }
      var $cal$$1_mainNode$$4$$ = $OraI18nUtils$$.$getLocaleElementsMainNode$($localeElements$$10_ret$$8$$), $format$$10$$ = $options$$129$$.pattern || $_expandFormat$$($options$$129$$, $localeElements$$10_ret$$8$$, "OraDateTimeConverter.format");
      $localeElements$$10_ret$$8$$ = [];
      for (var $current$$1_index$$87_part$$2_preMatch$$1$$, $quoteCount$$1$$ = 0, $cal$$1_mainNode$$4$$ = $cal$$1_mainNode$$4$$.dates.calendars.gregorian;;) {
        $current$$1_index$$87_part$$2_preMatch$$1$$ = $_TOKEN_REGEXP$$.lastIndex;
        var $ar_clength$$ = $_TOKEN_REGEXP$$.exec($format$$10$$);
        $current$$1_index$$87_part$$2_preMatch$$1$$ = $format$$10$$.slice($current$$1_index$$87_part$$2_preMatch$$1$$, $ar_clength$$ ? $ar_clength$$.index : $format$$10$$.length);
        $quoteCount$$1$$ += $_appendPreOrPostMatch$$($current$$1_index$$87_part$$2_preMatch$$1$$, $localeElements$$10_ret$$8$$);
        if (!$ar_clength$$) {
          break;
        }
        if ($quoteCount$$1$$ % 2) {
          $localeElements$$10_ret$$8$$.push($ar_clength$$[0]);
        } else {
          $current$$1_index$$87_part$$2_preMatch$$1$$ = $ar_clength$$[0];
          var $ar_clength$$ = $current$$1_index$$87_part$$2_preMatch$$1$$.length, $currentPart$$ = $_PROPERTIES_MAP$$[$current$$1_index$$87_part$$2_preMatch$$1$$];
          switch($currentPart$$.token) {
            case "days":
              $current$$1_index$$87_part$$2_preMatch$$1$$ = $cal$$1_mainNode$$4$$[$currentPart$$.token][$currentPart$$.style][$currentPart$$.dLen];
              $localeElements$$10_ret$$8$$.push($current$$1_index$$87_part$$2_preMatch$$1$$[$_getPart$$($value$$102$$, 3)]);
              break;
            case "months":
              $current$$1_index$$87_part$$2_preMatch$$1$$ = $cal$$1_mainNode$$4$$[$currentPart$$.token][$currentPart$$.style][$currentPart$$.mLen];
              $localeElements$$10_ret$$8$$.push($current$$1_index$$87_part$$2_preMatch$$1$$[$_getPart$$($value$$102$$, 1)]);
              break;
            case "dayOfMonth":
            ;
            case "monthIndex":
              $localeElements$$10_ret$$8$$.push($_getPaddedPart$$($localeElements$$10_ret$$8$$, $value$$102$$, $currentPart$$.getPartIdx, $ar_clength$$));
              break;
            case "year":
              $current$$1_index$$87_part$$2_preMatch$$1$$ = $value$$102$$.getFullYear();
              2 == $ar_clength$$ && ($current$$1_index$$87_part$$2_preMatch$$1$$ %= 100);
              $localeElements$$10_ret$$8$$.push($OraI18nUtils$$.$padZeros$($current$$1_index$$87_part$$2_preMatch$$1$$, $ar_clength$$));
              break;
            case "time":
              $_getTimeParts$$($localeElements$$10_ret$$8$$, $value$$102$$, $ar_clength$$, $currentPart$$, $current$$1_index$$87_part$$2_preMatch$$1$$);
              break;
            case "ampm":
              $current$$1_index$$87_part$$2_preMatch$$1$$ = 12 > $value$$102$$.getHours() ? $cal$$1_mainNode$$4$$.dayPeriods.format.wide.am : $cal$$1_mainNode$$4$$.dayPeriods.format.wide.pm;
              $localeElements$$10_ret$$8$$.push($current$$1_index$$87_part$$2_preMatch$$1$$);
              break;
            case "tz":
              $current$$1_index$$87_part$$2_preMatch$$1$$ = $value$$102$$.getTimezoneOffset();
              $localeElements$$10_ret$$8$$.push((0 >= $current$$1_index$$87_part$$2_preMatch$$1$$ ? "+" : "-") + $OraI18nUtils$$.$padZeros$(Math.floor(Math.abs($current$$1_index$$87_part$$2_preMatch$$1$$ / 60)), 2) + $OraI18nUtils$$.$padZeros$(Math.floor(Math.abs($current$$1_index$$87_part$$2_preMatch$$1$$ % 60)), 2));
              break;
            case "era":
              $current$$1_index$$87_part$$2_preMatch$$1$$ = $cal$$1_mainNode$$4$$.eras.eraAbbr;
              $localeElements$$10_ret$$8$$.push($current$$1_index$$87_part$$2_preMatch$$1$$["1"]);
              break;
            case "slash":
              $localeElements$$10_ret$$8$$.push("/");
              break;
            default:
              $_throwInvalidDateFormat$$($format$$10$$, $options$$129$$, $current$$1_index$$87_part$$2_preMatch$$1$$);
          }
        }
      }
      return $localeElements$$10_ret$$8$$.join("");
    };
    $_isSameYear$$ = function $$_isSameYear$$$($d1$$, $d2$$) {
      return $d1$$.getFullYear() == $d2$$.getFullYear();
    };
    $_isNextYear$$ = function $$_isNextYear$$$($d1$$1$$, $d2$$1$$) {
      return 1 == $d2$$1$$.getFullYear() - $d1$$1$$.getFullYear();
    };
    $_isPrevYear$$ = function $$_isPrevYear$$$($d1$$2$$, $d2$$2$$) {
      return $_isNextYear$$($d2$$2$$, $d1$$2$$);
    };
    $_isSameMonth$$ = function $$_isSameMonth$$$($d1$$3$$, $d2$$3$$) {
      return $_isSameYear$$($d1$$3$$, $d2$$3$$) && $d1$$3$$.getMonth() === $d2$$3$$.getMonth();
    };
    $_isNextMonth$$ = function $$_isNextMonth$$$($d1$$4$$, $d2$$4$$) {
      return $_isSameYear$$($d1$$4$$, $d2$$4$$) ? 1 == $d2$$4$$.getMonth() - $d1$$4$$.getMonth() : $_isNextYear$$($d1$$4$$, $d2$$4$$) ? 11 == $d1$$4$$.getMonth() && 0 == $d2$$4$$.getMonth() : !1;
    };
    $_isPrevMonth$$ = function $$_isPrevMonth$$$($d1$$5$$, $d2$$5$$) {
      return $_isNextMonth$$($d2$$5$$, $d1$$5$$);
    };
    $_getDaysDif$$ = function $$_getDaysDif$$$($d1$$6$$, $d2$$6$$) {
      var $day1$$ = $d1$$6$$.getDate(), $day2$$ = $d2$$6$$.getDate();
      $_isNextMonth$$($d1$$6$$, $d2$$6$$) && ($day2$$ += $_getDaysInMonth$$($d1$$6$$.getFullYear, $d1$$6$$.getMonth()));
      return $day2$$ - $day1$$;
    };
    $_getDayIndex$$ = function $$_getDayIndex$$$($localeElements$$11$$, $idx$$2$$) {
      var $ret$$11_territory$$1$$ = $OraI18nUtils$$.$parseBCP47$($OraI18nUtils$$.$getLocaleElementsMainNodeKey$($localeElements$$11$$)).region || "001", $ret$$11_territory$$1$$ = $idx$$2$$ - $localeElements$$11$$.supplemental.weekData.firstDay[$ret$$11_territory$$1$$];
      0 > $ret$$11_territory$$1$$ && ($ret$$11_territory$$1$$ += 7);
      return $ret$$11_territory$$1$$;
    };
    $_isSameWeek$$ = function $$_isSameWeek$$$($dif_localeElements$$12$$, $d1$$7$$, $d2$$7$$) {
      if ($d1$$7$$ > $d2$$7$$) {
        var $tmp$$ = $d1$$7$$;
        $d1$$7$$ = $d2$$7$$;
        $d2$$7$$ = $tmp$$;
      }
      if (!$_isSameMonth$$($d1$$7$$, $d2$$7$$) && !$_isNextMonth$$($d1$$7$$, $d2$$7$$)) {
        return!1;
      }
      $dif_localeElements$$12$$ = $_getDaysDif$$($d1$$7$$, $d2$$7$$) + $_getDayIndex$$($dif_localeElements$$12$$, $d1$$7$$.getDay());
      return 0 <= $dif_localeElements$$12$$ && 6 >= $dif_localeElements$$12$$;
    };
    $_isNextWeek$$ = function $$_isNextWeek$$$($dif$$1_localeElements$$13$$, $d1$$8$$, $d2$$8$$) {
      if (!$_isSameMonth$$($d1$$8$$, $d2$$8$$) && !$_isNextMonth$$($d1$$8$$, $d2$$8$$)) {
        return!1;
      }
      $dif$$1_localeElements$$13$$ = $_getDaysDif$$($d1$$8$$, $d2$$8$$) + $_getDayIndex$$($dif$$1_localeElements$$13$$, $d1$$8$$.getDay());
      return 7 <= $dif$$1_localeElements$$13$$ && 13 >= $dif$$1_localeElements$$13$$;
    };
    $_isPrevWeek$$ = function $$_isPrevWeek$$$($localeElements$$14$$, $d1$$9$$, $d2$$9$$) {
      return $_isNextWeek$$($localeElements$$14$$, $d2$$9$$, $d1$$9$$);
    };
    $_isSameDay$$ = function $$_isSameDay$$$($d1$$10$$, $d2$$10$$) {
      return $_isSameYear$$($d1$$10$$, $d2$$10$$) && $_isSameMonth$$($d1$$10$$, $d2$$10$$) && $d1$$10$$.getDate() === $d2$$10$$.getDate();
    };
    $_isNextDay$$ = function $$_isNextDay$$$($d1$$11$$, $d2$$11$$) {
      return $_isSameMonth$$($d1$$11$$, $d2$$11$$) || $_isNextMonth$$($d1$$11$$, $d2$$11$$) ? 1 === $_getDaysDif$$($d1$$11$$, $d2$$11$$) : !1;
    };
    $_isPrevDay$$ = function $$_isPrevDay$$$($d1$$12$$, $d2$$12$$) {
      return $_isNextDay$$($d2$$12$$, $d1$$12$$);
    };
    $_formatRelativeImpl$$ = function $$_formatRelativeImpl$$$($value$$105$$, $localeElements$$15$$, $getOption$$6_option$$16_options$$130$$) {
      var $fields$$ = $OraI18nUtils$$.$getLocaleElementsMainNode$($localeElements$$15$$).dates.fields;
      $getOption$$6_option$$16_options$$130$$ = $OraI18nUtils$$.$getGetOption$($getOption$$6_option$$16_options$$130$$, "OraDateTimeConverter.formatRelative");
      $getOption$$6_option$$16_options$$130$$("formatUsing", "string", ["displayName"]);
      $getOption$$6_option$$16_options$$130$$ = $getOption$$6_option$$16_options$$130$$("dateField", "string", ["day", "week", "month", "year"]);
      var $now$$ = new Date;
      switch($getOption$$6_option$$16_options$$130$$) {
        case "day":
          if ($_isSameDay$$($now$$, $value$$105$$)) {
            return $fields$$.day["relative-type-0"];
          }
          if ($_isNextDay$$($now$$, $value$$105$$)) {
            return $fields$$.day["relative-type-1"];
          }
          if ($_isPrevDay$$($now$$, $value$$105$$)) {
            return $fields$$.day["relative-type--1"];
          }
          break;
        case "week":
          if ($_isSameWeek$$($localeElements$$15$$, $now$$, $value$$105$$)) {
            return $fields$$.week["relative-type-0"];
          }
          if ($_isNextWeek$$($localeElements$$15$$, $now$$, $value$$105$$)) {
            return $fields$$.week["relative-type-1"];
          }
          if ($_isPrevWeek$$($localeElements$$15$$, $now$$, $value$$105$$)) {
            return $fields$$.week["relative-type--1"];
          }
          break;
        case "month":
          if ($_isSameMonth$$($now$$, $value$$105$$)) {
            return $fields$$.month["relative-type-0"];
          }
          if ($_isNextMonth$$($now$$, $value$$105$$)) {
            return $fields$$.month["relative-type-1"];
          }
          if ($_isPrevMonth$$($now$$, $value$$105$$)) {
            return $fields$$.month["relative-type--1"];
          }
          break;
        case "year":
          if ($_isSameYear$$($now$$, $value$$105$$)) {
            return $fields$$.year["relative-type-0"];
          }
          if ($_isNextYear$$($now$$, $value$$105$$)) {
            return $fields$$.year["relative-type-1"];
          }
          if ($_isPrevYear$$($now$$, $value$$105$$)) {
            return $fields$$.year["relative-type--1"];
          }
        ;
      }
      return null;
    };
    $_throwWeekdayMismatch$$ = function $$_throwWeekdayMismatch$$$($weekday$$, $day$$) {
      var $error$$14$$;
      $error$$14$$ = Error("The weekday " + $weekday$$ + " does not match the date " + $day$$);
      $error$$14$$.errorInfo = {errorCode:"dateToWeekdayMismatch", parameterMap:{weekday:$weekday$$, date:$day$$}};
      throw $error$$14$$;
    };
    $_throwDateFormatMismatch$$ = function $$_throwDateFormatMismatch$$$($value$$106$$, $format$$11$$, $errorCodeType_style$$) {
      var $error$$15_msg$$10$$;
      2 === $errorCodeType_style$$ ? ($error$$15_msg$$10$$ = 'The value "' + $value$$106$$ + '" does not match the expected date-time format "' + $format$$11$$ + '"', $errorCodeType_style$$ = "datetimeFormatMismatch") : 0 === $errorCodeType_style$$ ? ($error$$15_msg$$10$$ = 'The value "' + $value$$106$$ + '" does not match the expected date format "' + $format$$11$$ + '"', $errorCodeType_style$$ = "dateFormatMismatch") : ($error$$15_msg$$10$$ = 'The value "' + $value$$106$$ + '" does not match the expected time format "' + 
      $format$$11$$ + '"', $errorCodeType_style$$ = "timeFormatMismatch");
      $error$$15_msg$$10$$ = Error($error$$15_msg$$10$$);
      $error$$15_msg$$10$$.errorInfo = {errorCode:$errorCodeType_style$$, parameterMap:{value:$value$$106$$, format:$format$$11$$}};
      throw $error$$15_msg$$10$$;
    };
    $_expandYear$$ = function $$_expandYear$$$($start2DigitYear$$, $year$$1$$) {
      100 > $year$$1$$ && ($year$$1$$ += 100 * Math.floor($start2DigitYear$$ / 100) + ($year$$1$$ < $start2DigitYear$$ % 100 ? 100 : 0));
      return $year$$1$$;
    };
    $_arrayIndexOfDay$$ = function $$_arrayIndexOfDay$$$($daysObj$$, $item$$2$$) {
      var $days$$1$$ = {sun:0, mon:1, tue:2, wed:3, thu:4, fri:5, sat:6}, $d$$1$$;
      for ($d$$1$$ in $daysObj$$) {
        if ($OraI18nUtils$$.trim($OraI18nUtils$$.$toUpper$($daysObj$$[$d$$1$$])) == $OraI18nUtils$$.trim($item$$2$$)) {
          return $days$$1$$[$d$$1$$];
        }
      }
      return-1;
    };
    $_arrayIndexOfMonth$$ = function $$_arrayIndexOfMonth$$$($monthsObj$$, $item$$3$$) {
      for (var $m$$14$$ in $monthsObj$$) {
        if ($OraI18nUtils$$.trim($OraI18nUtils$$.$toUpper$($monthsObj$$[$m$$14$$])) === $OraI18nUtils$$.trim($item$$3$$)) {
          return $m$$14$$ - 1;
        }
      }
      return-1;
    };
    $_getDayIndex1$$ = function $$_getDayIndex1$$$($calDaysFmt_localeElements$$16$$, $value$$107$$, $fmt_ret$$12$$) {
      var $calDaysStdAlone_mainNode$$7$$ = $OraI18nUtils$$.$getLocaleElementsMainNode$($calDaysFmt_localeElements$$16$$), $days$$2$$;
      $calDaysFmt_localeElements$$16$$ = $calDaysStdAlone_mainNode$$7$$.dates.calendars.gregorian.days.format;
      $calDaysStdAlone_mainNode$$7$$ = $calDaysStdAlone_mainNode$$7$$.dates.calendars.gregorian.days["stand-alone"];
      switch($fmt_ret$$12$$) {
        case 0:
          $days$$2$$ = [$calDaysFmt_localeElements$$16$$.abbreviated, $calDaysFmt_localeElements$$16$$.wide];
          break;
        case 1:
          $days$$2$$ = [$calDaysStdAlone_mainNode$$7$$.abbreviated, $calDaysStdAlone_mainNode$$7$$.wide];
      }
      $value$$107$$ = $OraI18nUtils$$.$toUpper$($value$$107$$);
      $fmt_ret$$12$$ = $_arrayIndexOfDay$$($days$$2$$[0], $value$$107$$);
      -1 === $fmt_ret$$12$$ && ($fmt_ret$$12$$ = $_arrayIndexOfDay$$($days$$2$$[1], $value$$107$$));
      return $fmt_ret$$12$$;
    };
    $_getMonthIndex$$ = function $$_getMonthIndex$$$($calMonthsFmt_localeElements$$17$$, $value$$108$$, $fmt$$1_months$$1$$) {
      var $ret$$13$$ = -1, $calMonthsStdAlone_mainNode$$8$$ = $OraI18nUtils$$.$getLocaleElementsMainNode$($calMonthsFmt_localeElements$$17$$);
      $calMonthsFmt_localeElements$$17$$ = $calMonthsStdAlone_mainNode$$8$$.dates.calendars.gregorian.months.format;
      $calMonthsStdAlone_mainNode$$8$$ = $calMonthsStdAlone_mainNode$$8$$.dates.calendars.gregorian.months["stand-alone"];
      switch($fmt$$1_months$$1$$) {
        case 0:
          $fmt$$1_months$$1$$ = [$calMonthsFmt_localeElements$$17$$.wide, $calMonthsFmt_localeElements$$17$$.abbreviated];
          break;
        case 1:
          $fmt$$1_months$$1$$ = [$calMonthsStdAlone_mainNode$$8$$.wide, $calMonthsStdAlone_mainNode$$8$$.abbreviated];
          break;
        case 2:
          $fmt$$1_months$$1$$ = [$calMonthsFmt_localeElements$$17$$.wide, $calMonthsFmt_localeElements$$17$$.abbreviated, $calMonthsStdAlone_mainNode$$8$$.wide, $calMonthsStdAlone_mainNode$$8$$.abbreviated];
          break;
        default:
          return-1;
      }
      $value$$108$$ = $OraI18nUtils$$.$toUpper$($value$$108$$);
      for (var $m$$15$$ in $fmt$$1_months$$1$$) {
        if ($ret$$13$$ = $_arrayIndexOfMonth$$($fmt$$1_months$$1$$[$m$$15$$], $value$$108$$), -1 !== $ret$$13$$) {
          break;
        }
      }
      return $ret$$13$$;
    };
    $_getParseRegExp$$ = function $$_getParseRegExp$$$($format$$12$$, $options$$131$$) {
      for (var $expFormat_parseRegExp$$ = $format$$12$$.replace($_ESCAPE_REGEXP$$, "\\\\$1"), $regexp$$2$$ = ["^"], $groups$$ = [], $index$$88$$ = 0, $quoteCount$$2$$ = 0, $match$$4$$;null !== ($match$$4$$ = $_TOKEN_REGEXP$$.exec($expFormat_parseRegExp$$));) {
        var $m$$16_preMatch$$2$$ = $expFormat_parseRegExp$$.slice($index$$88$$, $match$$4$$.index), $index$$88$$ = $_TOKEN_REGEXP$$.lastIndex, $quoteCount$$2$$ = $quoteCount$$2$$ + $_appendPreOrPostMatch$$($m$$16_preMatch$$2$$, $regexp$$2$$);
        if ($quoteCount$$2$$ % 2) {
          $regexp$$2$$.push($match$$4$$[0]);
        } else {
          var $m$$16_preMatch$$2$$ = $match$$4$$[0], $add$$4$$;
          void 0 !== $_PROPERTIES_MAP$$[$m$$16_preMatch$$2$$] ? $add$$4$$ = $_PROPERTIES_MAP$$[$m$$16_preMatch$$2$$].regExp : $_throwInvalidDateFormat$$($format$$12$$, $options$$131$$, $m$$16_preMatch$$2$$);
          $add$$4$$ && $regexp$$2$$.push($add$$4$$);
          $groups$$.push($match$$4$$[0]);
        }
      }
      $_appendPreOrPostMatch$$($expFormat_parseRegExp$$.slice($index$$88$$), $regexp$$2$$);
      $regexp$$2$$.push("$");
      $expFormat_parseRegExp$$ = {regExp:$regexp$$2$$.join("").replace(/\s+/g, "\\s+"), groups:$groups$$};
      return{}[$format$$12$$] = $expFormat_parseRegExp$$;
    };
    $_validateRange$$ = function $$_validateRange$$$($name$$73$$, $rangeError_value$$109$$, $low$$, $high$$, $displayValue$$2$$, $displayLow$$, $displayHigh$$) {
      if ($rangeError_value$$109$$ < $low$$ || $rangeError_value$$109$$ > $high$$) {
        throw $rangeError_value$$109$$ = new RangeError($displayValue$$2$$ + " is out of range.  Enter a value between " + $displayLow$$ + " and " + $displayHigh$$ + " for " + $name$$73$$), $rangeError_value$$109$$.errorInfo = {errorCode:"datetimeOutOfRange", parameterMap:{value:$displayValue$$2$$, minValue:$displayLow$$, maxValue:$displayHigh$$, propertyName:$name$$73$$}}, $rangeError_value$$109$$;
      }
    };
    $_getTokenIndex$$ = function $$_getTokenIndex$$$($arr$$20$$, $token$$5$$) {
      for (var $i$$91$$ in $arr$$20$$) {
        for (var $n$$13$$ in $arr$$20$$[$i$$91$$]) {
          if ($n$$13$$ === $token$$5$$) {
            return parseInt($i$$91$$, 10);
          }
        }
      }
      return 0;
    };
    $_parseLenienthms$$ = function $$_parseLenienthms$$$($result$$6$$, $idx$$3_timepart$$, $format$$13$$, $hour_localeElements$$18$$) {
      var $calPM$$ = $OraI18nUtils$$.$getLocaleElementsMainNode$($hour_localeElements$$18$$).dates.calendars.gregorian.dayPeriods.format.wide.pm, $minute$$ = $hour_localeElements$$18$$ = $_TIME_REGEXP$$.lastIndex = 0, $second$$2$$ = 0, $msec$$ = 0, $match$$5$$ = $_TIME_REGEXP$$.exec($idx$$3_timepart$$);
      null === $match$$5$$ && $_throwDateFormatMismatch$$($idx$$3_timepart$$, $format$$13$$, 1);
      void 0 !== $match$$5$$[1] && ($hour_localeElements$$18$$ = parseInt($match$$5$$[1], 10));
      void 0 !== $match$$5$$[2] && ($minute$$ = parseInt($match$$5$$[2], 10));
      void 0 !== $match$$5$$[3] && ($second$$2$$ = parseInt($match$$5$$[3], 10));
      void 0 !== $match$$5$$[4] && ($msec$$ = parseInt($match$$5$$[4], 10));
      $_TIME_FORMAT_REGEXP$$.lastIndex = 0;
      $match$$5$$ = $_TIME_FORMAT_REGEXP$$.exec($format$$13$$);
      switch($match$$5$$[0]) {
        case "h":
          12 === $hour_localeElements$$18$$ && ($hour_localeElements$$18$$ = 0);
          $_validateRange$$("hour", $hour_localeElements$$18$$, 0, 11, $hour_localeElements$$18$$, 1, 12);
          $idx$$3_timepart$$ = $OraI18nUtils$$.$toUpper$($idx$$3_timepart$$).indexOf($OraI18nUtils$$.$toUpper$($calPM$$));
          -1 !== $idx$$3_timepart$$ && 12 > $hour_localeElements$$18$$ && ($hour_localeElements$$18$$ += 12);
          break;
        case "K":
          $_validateRange$$("hour", $hour_localeElements$$18$$, 0, 11, $hour_localeElements$$18$$, 0, 11);
          $idx$$3_timepart$$ = $OraI18nUtils$$.$toUpper$($idx$$3_timepart$$).indexOf($OraI18nUtils$$.$toUpper$($calPM$$));
          -1 !== $idx$$3_timepart$$ && 12 > $hour_localeElements$$18$$ && ($hour_localeElements$$18$$ += 12);
          break;
        case "H":
          $_validateRange$$("hour", $hour_localeElements$$18$$, 0, 23, $hour_localeElements$$18$$, 0, 23);
          break;
        case "k":
          24 === $hour_localeElements$$18$$ && ($hour_localeElements$$18$$ = 0), $_validateRange$$("hour", $hour_localeElements$$18$$, 0, 23, $hour_localeElements$$18$$, 1, 24);
      }
      $_validateRange$$("minute", $minute$$, 0, 59, $minute$$, 0, 59);
      $_validateRange$$("second", $second$$2$$, 0, 59, $second$$2$$, 0, 59);
      $_validateRange$$("millisec", $msec$$, 0, 999, $msec$$, 0, 999);
      $result$$6$$.setHours($hour_localeElements$$18$$, $minute$$, $second$$2$$, $msec$$);
    };
    $_getWeekdayName$$ = function $$_getWeekdayName$$$($value$$110$$, $localeElements$$19$$) {
      var $calDaysStandAlone_foundMatch_mainNode$$10$$ = $OraI18nUtils$$.$getLocaleElementsMainNode$($localeElements$$19$$), $calDaysFmt$$1_days$$3$$ = $calDaysStandAlone_foundMatch_mainNode$$10$$.dates.calendars.gregorian.days.format, $calDaysStandAlone_foundMatch_mainNode$$10$$ = $calDaysStandAlone_foundMatch_mainNode$$10$$.dates.calendars.gregorian.days["stand-alone"], $calDaysFmt$$1_days$$3$$ = [$calDaysFmt$$1_days$$3$$.wide, $calDaysFmt$$1_days$$3$$.abbreviated, $calDaysStandAlone_foundMatch_mainNode$$10$$.wide, 
      $calDaysStandAlone_foundMatch_mainNode$$10$$.abbreviated], $calDaysStandAlone_foundMatch_mainNode$$10$$ = !1, $dName$$, $i$$92$$, $j$$12$$;
      for ($i$$92$$ in $calDaysFmt$$1_days$$3$$) {
        for ($j$$12$$ in $calDaysFmt$$1_days$$3$$[$i$$92$$]) {
          if ($dName$$ = $calDaysFmt$$1_days$$3$$[$i$$92$$][$j$$12$$], (new RegExp($dName$$ + "\\b", "i")).test($value$$110$$)) {
            $calDaysStandAlone_foundMatch_mainNode$$10$$ = !0;
            break;
          }
        }
        if ($calDaysStandAlone_foundMatch_mainNode$$10$$) {
          break;
        }
        $dName$$ = null;
      }
      return $dName$$;
    };
    $_parseLenientyMEd$$ = function $$_parseLenientyMEd$$$($timepart$$1_value$$111$$, $format$$14$$, $options$$132_parsedDate_result$$7$$, $localeElements$$20$$, $isDateTime$$) {
      $_YMD_REGEXP$$.lastIndex = 0;
      var $daysInMonth_match$$6$$ = $_YMD_REGEXP$$.exec($timepart$$1_value$$111$$);
      null === $daysInMonth_match$$6$$ && $_throwDateFormatMismatch$$($timepart$$1_value$$111$$, $format$$14$$, 0);
      var $tokenIndexes$$ = [{y:$format$$14$$.indexOf("y")}, {M:$format$$14$$.indexOf("M")}, {d:$format$$14$$.indexOf("d")}];
      $tokenIndexes$$.sort(function($a$$62$$, $b$$34$$) {
        for (var $n1$$ in $a$$62$$) {
          break;
        }
        for (var $n2$$ in $b$$34$$) {
          break;
        }
        return $a$$62$$[$n1$$] - $b$$34$$[$n2$$];
      });
      var $dName$$1_year$$2$$, $month$$1_weekDay$$, $day$$1$$, $yearIndex$$1$$, $dayIndex$$, $i$$93$$, $foundYear$$ = !1, $foundDay$$ = !1;
      for ($i$$93$$ = 1;3 >= $i$$93$$;$i$$93$$++) {
        var $tokenMatch$$ = $daysInMonth_match$$6$$[$i$$93$$];
        if (2 < $tokenMatch$$.length || 31 < $tokenMatch$$) {
          $dName$$1_year$$2$$ = $tokenMatch$$, $foundYear$$ = !0, $yearIndex$$1$$ = $i$$93$$ - 1;
        }
      }
      $foundYear$$ || ($yearIndex$$1$$ = $_getTokenIndex$$($tokenIndexes$$, "y"), $dName$$1_year$$2$$ = $daysInMonth_match$$6$$[$_getTokenIndex$$($tokenIndexes$$, "y") + 1]);
      for ($i$$93$$ = 0;3 > $i$$93$$;$i$$93$$++) {
        if ($i$$93$$ !== $yearIndex$$1$$ && 12 < $daysInMonth_match$$6$$[$i$$93$$ + 1]) {
          $day$$1$$ = $daysInMonth_match$$6$$[$i$$93$$ + 1];
          $foundDay$$ = !0;
          $dayIndex$$ = $i$$93$$;
          break;
        }
      }
      if ($foundDay$$) {
        for ($i$$93$$ = 0;3 > $i$$93$$;$i$$93$$++) {
          if ($i$$93$$ !== $dayIndex$$ && $i$$93$$ !== $yearIndex$$1$$) {
            $month$$1_weekDay$$ = $daysInMonth_match$$6$$[$i$$93$$ + 1];
            break;
          }
        }
        void 0 === $month$$1_weekDay$$ && ($month$$1_weekDay$$ = $daysInMonth_match$$6$$[$_getTokenIndex$$($tokenIndexes$$, "M") + 1]);
      } else {
        $yearIndex$$1$$ === $_getTokenIndex$$($tokenIndexes$$, "d") ? ($day$$1$$ = $daysInMonth_match$$6$$[$_getTokenIndex$$($tokenIndexes$$, "y") + 1], $month$$1_weekDay$$ = $daysInMonth_match$$6$$[$_getTokenIndex$$($tokenIndexes$$, "M") + 1]) : $yearIndex$$1$$ === $_getTokenIndex$$($tokenIndexes$$, "M") ? ($day$$1$$ = $daysInMonth_match$$6$$[$_getTokenIndex$$($tokenIndexes$$, "d") + 1], $month$$1_weekDay$$ = $daysInMonth_match$$6$$[$_getTokenIndex$$($tokenIndexes$$, "y") + 1]) : ($day$$1$$ = $daysInMonth_match$$6$$[$_getTokenIndex$$($tokenIndexes$$, 
        "d") + 1], $month$$1_weekDay$$ = $daysInMonth_match$$6$$[$_getTokenIndex$$($tokenIndexes$$, "M") + 1]);
      }
      $month$$1_weekDay$$ -= 1;
      $daysInMonth_match$$6$$ = $_getDaysInMonth$$($dName$$1_year$$2$$, $month$$1_weekDay$$);
      $_validateRange$$("month", $month$$1_weekDay$$, 0, 11, $month$$1_weekDay$$ + 1, 1, 12);
      $_validateRange$$("day", $day$$1$$, 1, $daysInMonth_match$$6$$, $day$$1$$, 1, $daysInMonth_match$$6$$);
      $dName$$1_year$$2$$ = $_expandYear$$($_get2DigitYearStart$$($options$$132_parsedDate_result$$7$$), parseInt($dName$$1_year$$2$$, 10));
      $_validateRange$$("year", $dName$$1_year$$2$$, 0, 9999, $dName$$1_year$$2$$, 0, 9999);
      $options$$132_parsedDate_result$$7$$ = new Date($dName$$1_year$$2$$, $month$$1_weekDay$$, $day$$1$$);
      $dName$$1_year$$2$$ = $_getWeekdayName$$($timepart$$1_value$$111$$, $localeElements$$20$$);
      null != $dName$$1_year$$2$$ && ($month$$1_weekDay$$ = $_getDayIndex1$$($localeElements$$20$$, $dName$$1_year$$2$$, 0), $options$$132_parsedDate_result$$7$$.getDay() !== $month$$1_weekDay$$ && $_throwWeekdayMismatch$$($dName$$1_year$$2$$, $options$$132_parsedDate_result$$7$$.getDate()));
      $options$$132_parsedDate_result$$7$$ = {value:$options$$132_parsedDate_result$$7$$, warning:"lenient parsing was used"};
      $isDateTime$$ && ($timepart$$1_value$$111$$ = $timepart$$1_value$$111$$.substr($_YMD_REGEXP$$.lastIndex), 0 === $timepart$$1_value$$111$$.length ? $options$$132_parsedDate_result$$7$$.value.setHours(0, 0, 0, 0) : $_parseLenienthms$$($options$$132_parsedDate_result$$7$$.value, $timepart$$1_value$$111$$, $format$$14$$, $localeElements$$20$$));
      return $options$$132_parsedDate_result$$7$$;
    };
    $_parseLenientyMMMEd$$ = function $$_parseLenientyMMMEd$$$($timepart$$2_value$$112$$, $format$$15$$, $options$$133_parsedDate$$1$$, $localeElements$$21$$, $isDateTime$$1$$) {
      var $origValue_tokenIndexes$$1$$ = $timepart$$2_value$$112$$;
      $timepart$$2_value$$112$$ = $OraI18nUtils$$.$toUpper$($timepart$$2_value$$112$$);
      var $calMonthsStandAlone_foundMatch$$1_foundYear$$1_mainNode$$11$$ = $OraI18nUtils$$.$getLocaleElementsMainNode$($localeElements$$21$$), $calMonthsFmt$$1_match$$7_months$$2$$ = $calMonthsStandAlone_foundMatch$$1_foundYear$$1_mainNode$$11$$.dates.calendars.gregorian.months.format, $calMonthsStandAlone_foundMatch$$1_foundYear$$1_mainNode$$11$$ = $calMonthsStandAlone_foundMatch$$1_foundYear$$1_mainNode$$11$$.dates.calendars.gregorian.months["stand-alone"], $calMonthsFmt$$1_match$$7_months$$2$$ = 
      [$calMonthsFmt$$1_match$$7_months$$2$$.wide, $calMonthsFmt$$1_match$$7_months$$2$$.abbreviated, $calMonthsStandAlone_foundMatch$$1_foundYear$$1_mainNode$$11$$.wide, $calMonthsStandAlone_foundMatch$$1_foundYear$$1_mainNode$$11$$.abbreviated], $calMonthsStandAlone_foundMatch$$1_foundYear$$1_mainNode$$11$$ = !1, $reverseMonth_tokenMatch$$1$$, $dRegExp$$1_i$$94_weekDay$$1$$, $j$$14_month$$2$$, $dName$$2_mName$$;
      for ($dRegExp$$1_i$$94_weekDay$$1$$ in $calMonthsFmt$$1_match$$7_months$$2$$) {
        $reverseMonth_tokenMatch$$1$$ = [];
        for ($j$$14_month$$2$$ in $calMonthsFmt$$1_match$$7_months$$2$$[$dRegExp$$1_i$$94_weekDay$$1$$]) {
          $dName$$2_mName$$ = $OraI18nUtils$$.$toUpper$($calMonthsFmt$$1_match$$7_months$$2$$[$dRegExp$$1_i$$94_weekDay$$1$$][$j$$14_month$$2$$]), $reverseMonth_tokenMatch$$1$$.push({idx:$j$$14_month$$2$$, name:$dName$$2_mName$$});
        }
        $reverseMonth_tokenMatch$$1$$.sort(function($a$$63$$, $b$$35$$) {
          return $b$$35$$.idx - $a$$63$$.idx;
        });
        for ($j$$14_month$$2$$ in $reverseMonth_tokenMatch$$1$$) {
          if ($dName$$2_mName$$ = $reverseMonth_tokenMatch$$1$$[$j$$14_month$$2$$].name, -1 != $timepart$$2_value$$112$$.indexOf($dName$$2_mName$$)) {
            $calMonthsStandAlone_foundMatch$$1_foundYear$$1_mainNode$$11$$ = !0;
            $timepart$$2_value$$112$$ = $timepart$$2_value$$112$$.replace($dName$$2_mName$$, "");
            break;
          }
        }
        if ($calMonthsStandAlone_foundMatch$$1_foundYear$$1_mainNode$$11$$) {
          break;
        }
      }
      if (!$calMonthsStandAlone_foundMatch$$1_foundYear$$1_mainNode$$11$$) {
        return $_parseLenientyMEd$$($origValue_tokenIndexes$$1$$, $format$$15$$, $options$$133_parsedDate$$1$$, $localeElements$$21$$, $isDateTime$$1$$);
      }
      $j$$14_month$$2$$ = $_getMonthIndex$$($localeElements$$21$$, $dName$$2_mName$$, 2);
      $_validateRange$$("month", $j$$14_month$$2$$, 0, 11, $j$$14_month$$2$$, 1, 12);
      $dName$$2_mName$$ = $_getWeekdayName$$($origValue_tokenIndexes$$1$$, $localeElements$$21$$);
      $dRegExp$$1_i$$94_weekDay$$1$$ = new RegExp($dName$$2_mName$$ + "\\W", "i");
      null !== $dName$$2_mName$$ && ($timepart$$2_value$$112$$ = $timepart$$2_value$$112$$.replace($dRegExp$$1_i$$94_weekDay$$1$$, ""));
      $_YEAR_AND_DATE_REGEXP$$.lastIndex = 0;
      $calMonthsFmt$$1_match$$7_months$$2$$ = $_YEAR_AND_DATE_REGEXP$$.exec($timepart$$2_value$$112$$);
      null === $calMonthsFmt$$1_match$$7_months$$2$$ && $_throwDateFormatMismatch$$($origValue_tokenIndexes$$1$$, $format$$15$$, 0);
      $origValue_tokenIndexes$$1$$ = [{y:$format$$15$$.indexOf("y")}, {d:$format$$15$$.indexOf("d")}];
      $origValue_tokenIndexes$$1$$.sort(function($a$$64$$, $b$$36$$) {
        for (var $n1$$1$$ in $a$$64$$) {
          break;
        }
        for (var $n2$$1$$ in $b$$36$$) {
          break;
        }
        return $a$$64$$[$n1$$1$$] - $b$$36$$[$n2$$1$$];
      });
      var $daysInMonth$$1_result$$8_year$$3$$, $day$$2_yearIndex$$2$$, $calMonthsStandAlone_foundMatch$$1_foundYear$$1_mainNode$$11$$ = !1;
      for ($dRegExp$$1_i$$94_weekDay$$1$$ = 1;2 >= $dRegExp$$1_i$$94_weekDay$$1$$;$dRegExp$$1_i$$94_weekDay$$1$$++) {
        if ($reverseMonth_tokenMatch$$1$$ = $calMonthsFmt$$1_match$$7_months$$2$$[$dRegExp$$1_i$$94_weekDay$$1$$], 2 < $reverseMonth_tokenMatch$$1$$.length || 31 < $reverseMonth_tokenMatch$$1$$) {
          $daysInMonth$$1_result$$8_year$$3$$ = $reverseMonth_tokenMatch$$1$$, $calMonthsStandAlone_foundMatch$$1_foundYear$$1_mainNode$$11$$ = !0, $day$$2_yearIndex$$2$$ = $dRegExp$$1_i$$94_weekDay$$1$$ - 1;
        }
      }
      $calMonthsStandAlone_foundMatch$$1_foundYear$$1_mainNode$$11$$ || ($day$$2_yearIndex$$2$$ = $_getTokenIndex$$($origValue_tokenIndexes$$1$$, "y"), $daysInMonth$$1_result$$8_year$$3$$ = $calMonthsFmt$$1_match$$7_months$$2$$[$_getTokenIndex$$($origValue_tokenIndexes$$1$$, "y") + 1]);
      $day$$2_yearIndex$$2$$ = $day$$2_yearIndex$$2$$ === $_getTokenIndex$$($origValue_tokenIndexes$$1$$, "d") ? $calMonthsFmt$$1_match$$7_months$$2$$[$_getTokenIndex$$($origValue_tokenIndexes$$1$$, "y") + 1] : $calMonthsFmt$$1_match$$7_months$$2$$[$_getTokenIndex$$($origValue_tokenIndexes$$1$$, "d") + 1];
      $daysInMonth$$1_result$$8_year$$3$$ = $_expandYear$$($_get2DigitYearStart$$($options$$133_parsedDate$$1$$), parseInt($daysInMonth$$1_result$$8_year$$3$$, 10));
      $_validateRange$$("year", $daysInMonth$$1_result$$8_year$$3$$, 0, 9999, $daysInMonth$$1_result$$8_year$$3$$, 0, 9999);
      $options$$133_parsedDate$$1$$ = new Date($daysInMonth$$1_result$$8_year$$3$$, $j$$14_month$$2$$, $day$$2_yearIndex$$2$$);
      null != $dName$$2_mName$$ && ($dRegExp$$1_i$$94_weekDay$$1$$ = $_getDayIndex1$$($localeElements$$21$$, $dName$$2_mName$$, 0), $options$$133_parsedDate$$1$$.getDay() !== $dRegExp$$1_i$$94_weekDay$$1$$ && $_throwWeekdayMismatch$$($dName$$2_mName$$, $options$$133_parsedDate$$1$$.getDate()));
      $daysInMonth$$1_result$$8_year$$3$$ = $_getDaysInMonth$$($daysInMonth$$1_result$$8_year$$3$$, $j$$14_month$$2$$);
      $_validateRange$$("day", $day$$2_yearIndex$$2$$, 1, $daysInMonth$$1_result$$8_year$$3$$, $day$$2_yearIndex$$2$$, 1, $daysInMonth$$1_result$$8_year$$3$$);
      $daysInMonth$$1_result$$8_year$$3$$ = {value:$options$$133_parsedDate$$1$$, warning:"lenient parsing was used"};
      $isDateTime$$1$$ && ($timepart$$2_value$$112$$ = $timepart$$2_value$$112$$.substr($_YEAR_AND_DATE_REGEXP$$.lastIndex), 0 === $timepart$$2_value$$112$$.length ? $daysInMonth$$1_result$$8_year$$3$$.value.setHours(0, 0, 0, 0) : $_parseLenienthms$$($daysInMonth$$1_result$$8_year$$3$$.value, $timepart$$2_value$$112$$, $format$$15$$, $localeElements$$21$$));
      return $daysInMonth$$1_result$$8_year$$3$$;
    };
    $_parseLenient$$ = function $$_parseLenient$$$($value$$113$$, $format$$16$$, $d$$2_options$$134$$, $localeElements$$22$$) {
      switch($_dateTimeStyle$$($d$$2_options$$134$$, "OraDateTimeConverter.parse")) {
        case 0:
          return $_parseLenientyMMMEd$$($value$$113$$, $format$$16$$, $d$$2_options$$134$$, $localeElements$$22$$, !1);
        case 1:
          return $d$$2_options$$134$$ = new Date, $_parseLenienthms$$($d$$2_options$$134$$, $value$$113$$, $format$$16$$, $localeElements$$22$$), {value:$d$$2_options$$134$$, warning:"lenient parsing was used"};
        case 2:
          return $_parseLenientyMMMEd$$($value$$113$$, $format$$16$$, $d$$2_options$$134$$, $localeElements$$22$$, !0);
      }
      return null;
    };
    $_getNameIndex$$ = function $$_getNameIndex$$$($index$$89_localeElements$$23$$, $datePart$$, $matchGroup$$, $mLength$$, $monthsFormat_style$$1$$, $matchIndex$$, $start1$$, $end1$$, $start2$$, $end2$$, $name$$74$$) {
      $monthsFormat_style$$1$$ = $OraI18nUtils$$.$getLocaleElementsMainNode$($index$$89_localeElements$$23$$).dates.calendars.gregorian[$datePart$$][$monthsFormat_style$$1$$];
      $index$$89_localeElements$$23$$ = "months" === $datePart$$ ? $_getMonthIndex$$($index$$89_localeElements$$23$$, $matchGroup$$, $matchIndex$$) : $_getDayIndex1$$($index$$89_localeElements$$23$$, $matchGroup$$, $matchIndex$$);
      $_validateRange$$($name$$74$$, $index$$89_localeElements$$23$$, $start1$$, $end1$$, $matchGroup$$, $monthsFormat_style$$1$$[$mLength$$][$start2$$], $monthsFormat_style$$1$$[$mLength$$][$end2$$]);
      return $index$$89_localeElements$$23$$;
    };
    $_getTimePart$$ = function $$_getTimePart$$$($matchInt$$, $timeObj$$, $objMap$$, $clength$$1$$, $timeToken$$) {
      $timeObj$$[$objMap$$.timePart] = $matchInt$$;
      "h" === $timeToken$$ || "hh" === $timeToken$$ ? 12 === $matchInt$$ && ($timeObj$$[$objMap$$.timePart] = 0) : "k" === $timeToken$$ || "kk" === $timeToken$$ ? 24 === $matchInt$$ && ($timeObj$$[$objMap$$.timePart] = 0) : "S" === $timeToken$$ && ($timeObj$$[$objMap$$.timePart] = $matchInt$$ * Math.pow(10, 3 - $clength$$1$$));
      $_validateRange$$($objMap$$.timePart, $timeObj$$[$objMap$$.timePart], $objMap$$.start1, $objMap$$.end1, $matchInt$$, $objMap$$.start2, $objMap$$.end2);
    };
    $_parseExact$$ = function $$_parseExact$$$($parsedDate$$2_value$$114$$, $daysInMonth$$2_defaultYear_format$$17$$, $options$$135$$, $localeElements$$24$$) {
      var $calPM$$1_mainNode$$13$$ = $OraI18nUtils$$.$getLocaleElementsMainNode$($localeElements$$24$$);
      $parsedDate$$2_value$$114$$ = $OraI18nUtils$$.trim($parsedDate$$2_value$$114$$);
      var $eraPart_parseInfo_year$$4$$ = $calPM$$1_mainNode$$13$$.dates.calendars.gregorian.eras.eraAbbr["1"], $month$$3_trimEraPart$$ = $OraI18nUtils$$.$trimNumber$($eraPart_parseInfo_year$$4$$);
      $parsedDate$$2_value$$114$$ = $parsedDate$$2_value$$114$$.replace($eraPart_parseInfo_year$$4$$, $month$$3_trimEraPart$$);
      var $eraPart_parseInfo_year$$4$$ = $_getParseRegExp$$($daysInMonth$$2_defaultYear_format$$17$$, $options$$135$$), $match$$8$$ = (new RegExp($eraPart_parseInfo_year$$4$$.regExp)).exec($parsedDate$$2_value$$114$$);
      if (null === $match$$8$$) {
        return $_parseLenient$$($parsedDate$$2_value$$114$$, $daysInMonth$$2_defaultYear_format$$17$$, $options$$135$$, $localeElements$$24$$);
      }
      var $groups$$1$$ = $eraPart_parseInfo_year$$4$$.groups, $date$$3$$ = $month$$3_trimEraPart$$ = $eraPart_parseInfo_year$$4$$ = null, $weekDay$$2$$ = null, $hourOffset_tzMinOffset$$;
      $hourOffset_tzMinOffset$$ = null;
      for (var $pmHour$$ = !1, $matchInt$$1_minOffset$$, $adjustedMin_weekDayName$$, $timeObj$$1$$ = {hour:0, minute:0, second:0, millisec:0}, $calPM$$1_mainNode$$13$$ = $calPM$$1_mainNode$$13$$.dates.calendars.gregorian.dayPeriods.format.wide.pm, $start2DigitYear$$3$$ = $_get2DigitYearStart$$($options$$135$$), $j$$15$$ = 0, $jl$$ = $groups$$1$$.length;$j$$15$$ < $jl$$;$j$$15$$++) {
        var $matchGroup$$1$$ = $match$$8$$[$j$$15$$ + 1];
        if ($matchGroup$$1$$) {
          var $current$$3$$ = $groups$$1$$[$j$$15$$], $clength$$2$$ = $current$$3$$.length;
          $matchInt$$1_minOffset$$ = parseInt($matchGroup$$1$$, 10);
          var $currentGroup$$ = $_PROPERTIES_MAP$$[$current$$3$$];
          switch($currentGroup$$.token) {
            case "months":
              $month$$3_trimEraPart$$ = $_getNameIndex$$($localeElements$$24$$, $currentGroup$$.token, $matchGroup$$1$$, $currentGroup$$.mLen, $currentGroup$$.style, $currentGroup$$.matchIndex, 0, 11, "1", "12", "month name");
              break;
            case "days":
              $adjustedMin_weekDayName$$ = $matchGroup$$1$$;
              $weekDay$$2$$ = $_getNameIndex$$($localeElements$$24$$, $currentGroup$$.token, $matchGroup$$1$$, $currentGroup$$.dLen, $currentGroup$$.style, $currentGroup$$.matchIndex, 0, 6, "sun", "sat", "weekday");
              break;
            case "time":
              $_getTimePart$$($matchInt$$1_minOffset$$, $timeObj$$1$$, $currentGroup$$, $clength$$2$$, $current$$3$$);
              break;
            case "dayOfMonth":
              $date$$3$$ = $matchInt$$1_minOffset$$;
              if (31 < $date$$3$$) {
                return $_parseLenient$$($parsedDate$$2_value$$114$$, $daysInMonth$$2_defaultYear_format$$17$$, $options$$135$$, $localeElements$$24$$);
              }
              break;
            case "monthIndex":
              $month$$3_trimEraPart$$ = $matchInt$$1_minOffset$$ - 1;
              if (11 < $month$$3_trimEraPart$$) {
                return $_parseLenient$$($parsedDate$$2_value$$114$$, $daysInMonth$$2_defaultYear_format$$17$$, $options$$135$$, $localeElements$$24$$);
              }
              break;
            case "year":
              $eraPart_parseInfo_year$$4$$ = $_expandYear$$($start2DigitYear$$3$$, $matchInt$$1_minOffset$$);
              $_validateRange$$("year", $eraPart_parseInfo_year$$4$$, 0, 9999, $eraPart_parseInfo_year$$4$$, 0, 9999);
              break;
            case "ampm":
              $pmHour$$ = $OraI18nUtils$$.$toUpper$($matchGroup$$1$$) === $OraI18nUtils$$.$toUpper$($calPM$$1_mainNode$$13$$);
              break;
            case "tz":
              $hourOffset_tzMinOffset$$ = $matchInt$$1_minOffset$$ / 100 << 0, $_validateRange$$("TZ Offset", $hourOffset_tzMinOffset$$, -12, 13, $matchInt$$1_minOffset$$, -12, 13), $matchInt$$1_minOffset$$ = Math.abs($matchInt$$1_minOffset$$ % 100), $_validateRange$$("TZ Offset", $matchInt$$1_minOffset$$, 0, 59, $matchInt$$1_minOffset$$, 0, 59), $hourOffset_tzMinOffset$$ = 60 * $hourOffset_tzMinOffset$$ + ($OraI18nUtils$$.$startsWith$($matchGroup$$1$$, "-") ? -$matchInt$$1_minOffset$$ : $matchInt$$1_minOffset$$);
          }
        }
      }
      $parsedDate$$2_value$$114$$ = new Date;
      $daysInMonth$$2_defaultYear_format$$17$$ = $parsedDate$$2_value$$114$$.getFullYear();
      null === $eraPart_parseInfo_year$$4$$ && ($eraPart_parseInfo_year$$4$$ = $daysInMonth$$2_defaultYear_format$$17$$);
      null === $month$$3_trimEraPart$$ && null === $date$$3$$ ? ($month$$3_trimEraPart$$ = $parsedDate$$2_value$$114$$.getMonth(), $date$$3$$ = $parsedDate$$2_value$$114$$.getDate()) : null === $date$$3$$ && ($date$$3$$ = 1);
      $daysInMonth$$2_defaultYear_format$$17$$ = $_getDaysInMonth$$($eraPart_parseInfo_year$$4$$, $month$$3_trimEraPart$$);
      $_validateRange$$("day", $date$$3$$, 1, $daysInMonth$$2_defaultYear_format$$17$$, $date$$3$$, 1, $daysInMonth$$2_defaultYear_format$$17$$);
      $parsedDate$$2_value$$114$$.setFullYear($eraPart_parseInfo_year$$4$$, $month$$3_trimEraPart$$, $date$$3$$);
      null !== $weekDay$$2$$ && $parsedDate$$2_value$$114$$.getDay() !== $weekDay$$2$$ && $_throwWeekdayMismatch$$($adjustedMin_weekDayName$$, $parsedDate$$2_value$$114$$.getDate());
      $pmHour$$ && 12 > $timeObj$$1$$.hour && ($timeObj$$1$$.hour += 12);
      $parsedDate$$2_value$$114$$.setHours($timeObj$$1$$.hour, $timeObj$$1$$.minute, $timeObj$$1$$.second, $timeObj$$1$$.millisec);
      null !== $hourOffset_tzMinOffset$$ && ($adjustedMin_weekDayName$$ = $parsedDate$$2_value$$114$$.getMinutes() - ($hourOffset_tzMinOffset$$ + $parsedDate$$2_value$$114$$.getTimezoneOffset()), $parsedDate$$2_value$$114$$.setHours($parsedDate$$2_value$$114$$.getHours() + ($adjustedMin_weekDayName$$ / 60 << 0), $adjustedMin_weekDayName$$ % 60));
      return{value:$parsedDate$$2_value$$114$$};
    };
    $_getResolvedOptionsFromPattern$$ = function $$_getResolvedOptionsFromPattern$$$($locale$$6_result$$11$$, $m$$17_match$$9_numberingSystemKey$$2$$, $pattern$$4$$) {
      var $expFormat$$1$$ = $pattern$$4$$.replace($_ESCAPE_REGEXP$$, "\\\\$1"), $regexp$$3$$ = ["^"], $quoteCount$$3$$ = 0, $index$$90$$ = 0;
      for ($locale$$6_result$$11$$ = {locale:$locale$$6_result$$11$$, numberingSystem:$m$$17_match$$9_numberingSystemKey$$2$$, calendar:"gregorian"};null !== ($m$$17_match$$9_numberingSystemKey$$2$$ = $_TOKEN_REGEXP$$.exec($expFormat$$1$$));) {
        var $preMatch$$3$$ = $expFormat$$1$$.slice($index$$90$$, $m$$17_match$$9_numberingSystemKey$$2$$.index), $index$$90$$ = $_TOKEN_REGEXP$$.lastIndex, $quoteCount$$3$$ = $quoteCount$$3$$ + $_appendPreOrPostMatch$$($preMatch$$3$$, $regexp$$3$$);
        if (!($quoteCount$$3$$ % 2) && ($m$$17_match$$9_numberingSystemKey$$2$$ = $m$$17_match$$9_numberingSystemKey$$2$$[0], "/" !== $m$$17_match$$9_numberingSystemKey$$2$$ && "zzzz" !== $m$$17_match$$9_numberingSystemKey$$2$$ && "zzz" !== $m$$17_match$$9_numberingSystemKey$$2$$ && "zz" !== $m$$17_match$$9_numberingSystemKey$$2$$ && "zz" !== $m$$17_match$$9_numberingSystemKey$$2$$ && "z" !== $m$$17_match$$9_numberingSystemKey$$2$$)) {
          if (void 0 !== $_PROPERTIES_MAP$$[$m$$17_match$$9_numberingSystemKey$$2$$]) {
            if ($locale$$6_result$$11$$[$_PROPERTIES_MAP$$[$m$$17_match$$9_numberingSystemKey$$2$$].key] = $_PROPERTIES_MAP$$[$m$$17_match$$9_numberingSystemKey$$2$$].value, "kk" === $m$$17_match$$9_numberingSystemKey$$2$$ || "HH" === $m$$17_match$$9_numberingSystemKey$$2$$ || "H" === $m$$17_match$$9_numberingSystemKey$$2$$ || "k" === $m$$17_match$$9_numberingSystemKey$$2$$) {
              $locale$$6_result$$11$$.hour12 = !1;
            } else {
              if ("KK" === $m$$17_match$$9_numberingSystemKey$$2$$ || "hh" === $m$$17_match$$9_numberingSystemKey$$2$$ || "h" === $m$$17_match$$9_numberingSystemKey$$2$$ || "K" === $m$$17_match$$9_numberingSystemKey$$2$$) {
                $locale$$6_result$$11$$.hour12 = !0;
              }
            }
          } else {
            $_throwInvalidDateFormat$$($pattern$$4$$, $locale$$6_result$$11$$, $m$$17_match$$9_numberingSystemKey$$2$$);
          }
        }
      }
      return $locale$$6_result$$11$$;
    };
    $_dateTimeStyleFromPattern$$ = function $$_dateTimeStyleFromPattern$$$($pattern$$5_result$$12$$) {
      $pattern$$5_result$$12$$ = $_getResolvedOptionsFromPattern$$("", "", $pattern$$5_result$$12$$);
      var $isTime$$1$$ = void 0 !== $pattern$$5_result$$12$$.hour || void 0 !== $pattern$$5_result$$12$$.minute || void 0 !== $pattern$$5_result$$12$$.second;
      return void 0 === $pattern$$5_result$$12$$.year && void 0 === $pattern$$5_result$$12$$.month && void 0 === $pattern$$5_result$$12$$.weekday && void 0 === $pattern$$5_result$$12$$.day || !$isTime$$1$$ ? $isTime$$1$$ ? 1 : 0 : 2;
    };
    $_dateTimeStyle$$ = function $$_dateTimeStyle$$$($options$$136$$, $caller$$6$$) {
      if (void 0 !== $options$$136$$.pattern) {
        return $_dateTimeStyleFromPattern$$($options$$136$$.pattern);
      }
      var $getOption$$7_option$$17$$ = $OraI18nUtils$$.$getGetOption$($options$$136$$, $caller$$6$$), $isTime$$2$$ = void 0 !== $getOption$$7_option$$17$$("hour", "string", ["2-digit", "numeric"]) || void 0 !== $getOption$$7_option$$17$$("minute", "string", ["2-digit", "numeric"]) || void 0 !== $getOption$$7_option$$17$$("second", "string", ["2-digit", "numeric"]), $isDate$$3$$ = void 0 !== $getOption$$7_option$$17$$("year", "string", ["2-digit", "numeric"]) || void 0 !== $getOption$$7_option$$17$$("month", 
      "string", ["2-digit", "numeric", "narrow", "short", "long"]) || void 0 !== $getOption$$7_option$$17$$("day", "string", ["2-digit", "numeric"]) || void 0 !== $getOption$$7_option$$17$$("weekday", "string", ["narrow", "short", "long"]);
      if ($isDate$$3$$ && $isTime$$2$$) {
        return 2;
      }
      if ($isTime$$2$$) {
        return 1;
      }
      if ($isDate$$3$$) {
        return 0;
      }
      $getOption$$7_option$$17$$ = $getOption$$7_option$$17$$("formatType", "string", ["date", "time", "datetime"], "date");
      return "datetime" === $getOption$$7_option$$17$$ ? 2 : "time" === $getOption$$7_option$$17$$ ? 1 : 0;
    };
    $_parseImpl$$ = function $$_parseImpl$$$($str$$14$$, $localeElements$$25$$, $options$$137$$, $locale$$7$$) {
      var $formats_numberingSystemKey$$3$$ = $OraI18nUtils$$.$getLanguageExtension$($locale$$7$$, "nu");
      void 0 === $OraI18nUtils$$.$numeringSystems$[$formats_numberingSystemKey$$3$$] && ($formats_numberingSystemKey$$3$$ = "latn");
      if ("latn" !== $formats_numberingSystemKey$$3$$) {
        var $idx$$4$$, $latnStr$$ = [];
        for ($idx$$4$$ = 0;$idx$$4$$ < $str$$14$$.length;$idx$$4$$++) {
          var $pos$$ = $OraI18nUtils$$.$numeringSystems$[$formats_numberingSystemKey$$3$$].indexOf($str$$14$$[$idx$$4$$]);
          -1 != $pos$$ ? $latnStr$$.push($pos$$) : $latnStr$$.push($str$$14$$[$idx$$4$$]);
        }
        $str$$14$$ = $latnStr$$.join("");
      }
      if (2 >= arguments.length || void 0 === $options$$137$$) {
        $options$$137$$ = {year:"numeric", month:"numeric", day:"numeric"};
      }
      $formats_numberingSystemKey$$3$$ = $options$$137$$.pattern || $_expandFormat$$($options$$137$$, $localeElements$$25$$, "OraDateTimeConverter.parse");
      return $_parseExact$$($str$$14$$, $formats_numberingSystemKey$$3$$, $options$$137$$, $localeElements$$25$$);
    };
    return{$getInstance$:function() {
      $instance$$12$$ || ($instance$$12$$ = $_init$$());
      return $instance$$12$$;
    }};
  }();
  $oj$$6$$.$IntlNumberConverter$ = function $$oj$$6$$$$IntlNumberConverter$$($options$$138$$) {
    this.Init($options$$138$$);
  };
  $goog$exportPath_$$("IntlNumberConverter", $oj$$6$$.$IntlNumberConverter$, $oj$$6$$);
  $oj$$6$$.$Object$.$createSubclass$($oj$$6$$.$IntlNumberConverter$, $oj$$6$$.$NumberConverter$, "oj.IntlNumberConverter");
  $oj$$6$$.$IntlNumberConverter$.prototype.Init = function $$oj$$6$$$$IntlNumberConverter$$$Init$($options$$139$$) {
    $oj$$6$$.$IntlNumberConverter$.$superclass$.Init.call(this, $options$$139$$);
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlNumberConverter.prototype.Init", {Init:$oj$$6$$.$IntlNumberConverter$.prototype.Init});
  $oj$$6$$.$IntlNumberConverter$.prototype.$_getWrapped$ = function $$oj$$6$$$$IntlNumberConverter$$$$_getWrapped$$() {
    this.$_wrapped$ || (this.$_wrapped$ = $OraNumberConverter$$.$getInstance$());
    return this.$_wrapped$;
  };
  $oj$$6$$.$IntlNumberConverter$.prototype.format = function $$oj$$6$$$$IntlNumberConverter$$$format$($converterError_value$$115$$) {
    if (null == $converterError_value$$115$$ || "string" === typeof $converterError_value$$115$$ && 0 === $oj$$6$$.$StringUtils$.trim("" + $converterError_value$$115$$).length || "number" === typeof $converterError_value$$115$$ && isNaN($converterError_value$$115$$)) {
      return "";
    }
    var $localeElements$$26$$ = $oj$$6$$.$LocaleData$.$__getBundle$(), $locale$$8$$ = $oj$$6$$.$Config$.$getLocale$(), $resolvedOptions$$ = this.resolvedOptions();
    try {
      return this.$_getWrapped$().format($converterError_value$$115$$, $localeElements$$26$$, $resolvedOptions$$, $locale$$8$$);
    } catch ($e$$32$$) {
      throw $converterError_value$$115$$ = this.$_processConverterError$($e$$32$$, $converterError_value$$115$$), $converterError_value$$115$$;
    }
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlNumberConverter.prototype.format", {format:$oj$$6$$.$IntlNumberConverter$.prototype.format});
  $oj$$6$$.$IntlNumberConverter$.prototype.$getHint$ = function $$oj$$6$$$$IntlNumberConverter$$$$getHint$$() {
    return $oj$$6$$.$IntlNumberConverter$.$superclass$.$getHint$.call(this);
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlNumberConverter.prototype.getHint", {$getHint$:$oj$$6$$.$IntlNumberConverter$.prototype.$getHint$});
  $oj$$6$$.$IntlNumberConverter$.prototype.$getOptions$ = function $$oj$$6$$$$IntlNumberConverter$$$$getOptions$$() {
    return $oj$$6$$.$IntlNumberConverter$.$superclass$.$getOptions$.call(this);
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlNumberConverter.prototype.getOptions", {$getOptions$:$oj$$6$$.$IntlNumberConverter$.prototype.$getOptions$});
  $oj$$6$$.$IntlNumberConverter$.prototype.parse = function $$oj$$6$$$$IntlNumberConverter$$$parse$($converterError$$1_value$$116$$) {
    var $localeElements$$27$$ = $oj$$6$$.$LocaleData$.$__getBundle$(), $locale$$9$$ = $oj$$6$$.$Config$.$getLocale$(), $resolvedOptions$$1$$ = this.resolvedOptions();
    if (null == $converterError$$1_value$$116$$ || "" === $converterError$$1_value$$116$$) {
      return null;
    }
    try {
      return this.$_getWrapped$().parse($oj$$6$$.$StringUtils$.trim($converterError$$1_value$$116$$), $localeElements$$27$$, $resolvedOptions$$1$$, $locale$$9$$);
    } catch ($e$$33$$) {
      throw $converterError$$1_value$$116$$ = this.$_processConverterError$($e$$33$$, $converterError$$1_value$$116$$), $converterError$$1_value$$116$$;
    }
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlNumberConverter.prototype.parse", {parse:$oj$$6$$.$IntlNumberConverter$.prototype.parse});
  $oj$$6$$.$IntlNumberConverter$.prototype.resolvedOptions = function $$oj$$6$$$$IntlNumberConverter$$$resolvedOptions$() {
    var $converterError$$2_localeElements$$28$$, $locale$$10$$ = $oj$$6$$.$Config$.$getLocale$();
    if ($locale$$10$$ !== this.$_locale$ || !this.$_resolvedOptions$) {
      $converterError$$2_localeElements$$28$$ = $oj$$6$$.$LocaleData$.$__getBundle$();
      try {
        this.$_resolvedOptions$ = this.$_getWrapped$().resolvedOptions($converterError$$2_localeElements$$28$$, this.$getOptions$(), $locale$$10$$), this.$_locale$ = $locale$$10$$;
      } catch ($e$$34$$) {
        throw $converterError$$2_localeElements$$28$$ = this.$_processConverterError$($e$$34$$), $converterError$$2_localeElements$$28$$;
      }
    }
    return this.$_resolvedOptions$;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlNumberConverter.prototype.resolvedOptions", {resolvedOptions:$oj$$6$$.$IntlNumberConverter$.prototype.resolvedOptions});
  $oj$$6$$.$IntlNumberConverter$.prototype.$_processConverterError$ = function $$oj$$6$$$$IntlNumberConverter$$$$_processConverterError$$($e$$35$$, $value$$117$$) {
    var $errorInfo$$4_parameterMap$$ = $e$$35$$.errorInfo, $errorCode_summary$$10$$, $converterError$$3_detail$$13$$, $resourceKey$$;
    if ($errorInfo$$4_parameterMap$$) {
      if ($errorCode_summary$$10$$ = $errorInfo$$4_parameterMap$$.errorCode, $errorInfo$$4_parameterMap$$ = $errorInfo$$4_parameterMap$$.parameterMap, $oj$$6$$.$Assert$.$assertObject$($errorInfo$$4_parameterMap$$), $e$$35$$ instanceof TypeError) {
        if ("optionTypesMismatch" === $errorCode_summary$$10$$ || "optionTypeInvalid" === $errorCode_summary$$10$$) {
          $converterError$$3_detail$$13$$ = $oj$$6$$.$IntlConverterUtils$.$__getConverterOptionError$($errorCode_summary$$10$$, $errorInfo$$4_parameterMap$$);
        }
      } else {
        $e$$35$$ instanceof RangeError ? "optionOutOfRange" === $errorCode_summary$$10$$ && ($converterError$$3_detail$$13$$ = $oj$$6$$.$IntlConverterUtils$.$__getConverterOptionError$($errorCode_summary$$10$$, $errorInfo$$4_parameterMap$$)) : $e$$35$$ instanceof SyntaxError ? "optionValueInvalid" === $errorCode_summary$$10$$ && ($converterError$$3_detail$$13$$ = $oj$$6$$.$IntlConverterUtils$.$__getConverterOptionError$($errorCode_summary$$10$$, $errorInfo$$4_parameterMap$$)) : $e$$35$$ instanceof 
        Error && ("decimalFormatMismatch" === $errorCode_summary$$10$$ ? $resourceKey$$ = "oj-converter.number.decimalFormatMismatch.summary" : "currencyFormatMismatch" === $errorCode_summary$$10$$ ? $resourceKey$$ = "oj-converter.number.currencyFormatMismatch.summary" : "percentFormatMismatch" === $errorCode_summary$$10$$ && ($resourceKey$$ = "oj-converter.number.percentFormatMismatch.summary"), $resourceKey$$ && ($errorCode_summary$$10$$ = $oj$$6$$.$Translations$.$getTranslatedString$($resourceKey$$, 
        {value:$value$$117$$ || $errorInfo$$4_parameterMap$$.value, format:$errorInfo$$4_parameterMap$$.format}), $converterError$$3_detail$$13$$ = $oj$$6$$.$Translations$.$getTranslatedString$("oj-converter.hint.detail", {exampleValue:this.$_getHintValue$()}), $converterError$$3_detail$$13$$ = new $oj$$6$$.$ConverterError$($errorCode_summary$$10$$, $converterError$$3_detail$$13$$)));
      }
    }
    $converterError$$3_detail$$13$$ || ($converterError$$3_detail$$13$$ = $errorCode_summary$$10$$ = $e$$35$$.message, $converterError$$3_detail$$13$$ = new $oj$$6$$.$ConverterError$($errorCode_summary$$10$$, $converterError$$3_detail$$13$$));
    return $converterError$$3_detail$$13$$;
  };
  $oj$$6$$.$IntlNumberConverter$.prototype.$_getHintValue$ = function $$oj$$6$$$$IntlNumberConverter$$$$_getHintValue$$() {
    var $value$$118$$ = "";
    try {
      $value$$118$$ = this.format(12345.98765);
    } catch ($e$$36$$) {
      $e$$36$$ instanceof $oj$$6$$.$ConverterError$ && ($value$$118$$ = "");
    } finally {
      return $value$$118$$;
    }
  };
  var $OraNumberConverter$$;
  $OraNumberConverter$$ = function() {
    function $_init$$1$$() {
      return{format:function($value$$119$$, $localeElements$$29$$, $options$$140$$, $locale$$11$$) {
        if (2 >= arguments.length || void 0 === $options$$140$$) {
          $options$$140$$ = {useGrouping:!0, style:"decimal"};
        }
        $_validateNumberOptions$$($options$$140$$, "OraNumberConverter.format");
        var $numberSettings$$ = {};
        $_getNumberSettings$$($localeElements$$29$$, $numberSettings$$, $options$$140$$, $locale$$11$$);
        return $_formatNumberImpl$$($value$$119$$, $options$$140$$, $localeElements$$29$$, $numberSettings$$, $locale$$11$$);
      }, parse:function($str$$15$$, $localeElements$$30$$, $options$$141$$, $locale$$12$$) {
        if ("number" === typeof $str$$15$$) {
          return $str$$15$$;
        }
        if ("[object Number]" === Object.prototype.toString.call($str$$15$$)) {
          return Number($str$$15$$);
        }
        if (2 >= arguments.length || void 0 === $options$$141$$) {
          $options$$141$$ = {useGrouping:!0, style:"decimal"};
        }
        var $errStr$$ = $str$$15$$;
        $_validateNumberOptions$$($options$$141$$, "OraNumberConverter.parse");
        var $error$$16_localeElementsMainNode_msg$$12$$ = $OraI18nUtils$$.$getLocaleElementsMainNode$($localeElements$$30$$), $numberSettings$$1$$ = {}, $groupingSeparator_numberingSystemKey$$4_p$$2$$ = $OraI18nUtils$$.$getLanguageExtension$($locale$$12$$, "nu");
        void 0 === $OraI18nUtils$$.$numeringSystems$[$groupingSeparator_numberingSystemKey$$4_p$$2$$] && ($groupingSeparator_numberingSystemKey$$4_p$$2$$ = "latn");
        if ("latn" !== $groupingSeparator_numberingSystemKey$$4_p$$2$$) {
          var $decimalSeparator_expSignInfo_fraction_idx$$5$$, $latnStr$$1_ret$$14_sign_value1$$7$$ = [];
          for ($decimalSeparator_expSignInfo_fraction_idx$$5$$ = 0;$decimalSeparator_expSignInfo_fraction_idx$$5$$ < $str$$15$$.length;$decimalSeparator_expSignInfo_fraction_idx$$5$$++) {
            var $exponent_num$$5_pos$$1_signInfo$$ = $OraI18nUtils$$.$numeringSystems$[$groupingSeparator_numberingSystemKey$$4_p$$2$$].indexOf($str$$15$$[$decimalSeparator_expSignInfo_fraction_idx$$5$$]);
            -1 != $exponent_num$$5_pos$$1_signInfo$$ ? $latnStr$$1_ret$$14_sign_value1$$7$$.push($exponent_num$$5_pos$$1_signInfo$$) : $latnStr$$1_ret$$14_sign_value1$$7$$.push($str$$15$$[$decimalSeparator_expSignInfo_fraction_idx$$5$$]);
          }
          $str$$15$$ = $latnStr$$1_ret$$14_sign_value1$$7$$.join("");
        }
        $_getNumberSettings$$($localeElements$$30$$, $numberSettings$$1$$, $options$$141$$, $locale$$12$$);
        $decimalSeparator_expSignInfo_fraction_idx$$5$$ = $error$$16_localeElementsMainNode_msg$$12$$.numbers[$numberSettings$$1$$.numberingSystem].decimal;
        $groupingSeparator_numberingSystemKey$$4_p$$2$$ = $error$$16_localeElementsMainNode_msg$$12$$.numbers[$numberSettings$$1$$.numberingSystem].group;
        $latnStr$$1_ret$$14_sign_value1$$7$$ = NaN;
        $latnStr$$1_ret$$14_sign_value1$$7$$ = $str$$15$$.replace(/ /g, "");
        if ($_REGEX_INFINITY$$.test($latnStr$$1_ret$$14_sign_value1$$7$$)) {
          return $latnStr$$1_ret$$14_sign_value1$$7$$ = parseFloat($str$$15$$);
        }
        var $exponent_num$$5_pos$$1_signInfo$$ = $_parseNegativePattern$$($str$$15$$, $options$$141$$, $numberSettings$$1$$, $error$$16_localeElementsMainNode_msg$$12$$), $latnStr$$1_ret$$14_sign_value1$$7$$ = $exponent_num$$5_pos$$1_signInfo$$[0], $exponent_num$$5_pos$$1_signInfo$$ = $exponent_num$$5_pos$$1_signInfo$$[1], $latnStr$$1_ret$$14_sign_value1$$7$$ = $latnStr$$1_ret$$14_sign_value1$$7$$ || "+", $exponent_num$$5_pos$$1_signInfo$$ = $exponent_num$$5_pos$$1_signInfo$$.replace(/ /g, ""), $exponentSymbol_integer$$ = 
        $numberSettings$$1$$.exponential, $altGroupSep_intAndFraction$$, $decimalPos_exponentPos$$ = $exponent_num$$5_pos$$1_signInfo$$.indexOf($exponentSymbol_integer$$.toLowerCase());
        0 > $decimalPos_exponentPos$$ && ($decimalPos_exponentPos$$ = $exponent_num$$5_pos$$1_signInfo$$.indexOf($OraI18nUtils$$.$toUpper$($exponentSymbol_integer$$)));
        0 > $decimalPos_exponentPos$$ ? ($altGroupSep_intAndFraction$$ = $exponent_num$$5_pos$$1_signInfo$$, $exponent_num$$5_pos$$1_signInfo$$ = null) : ($altGroupSep_intAndFraction$$ = $exponent_num$$5_pos$$1_signInfo$$.substr(0, $decimalPos_exponentPos$$), $exponent_num$$5_pos$$1_signInfo$$ = $exponent_num$$5_pos$$1_signInfo$$.substr($decimalPos_exponentPos$$ + $exponentSymbol_integer$$.length));
        $decimalPos_exponentPos$$ = $altGroupSep_intAndFraction$$.indexOf($decimalSeparator_expSignInfo_fraction_idx$$5$$);
        0 > $decimalPos_exponentPos$$ ? ($exponentSymbol_integer$$ = $altGroupSep_intAndFraction$$, $decimalSeparator_expSignInfo_fraction_idx$$5$$ = null) : ($exponentSymbol_integer$$ = $altGroupSep_intAndFraction$$.substr(0, $decimalPos_exponentPos$$), $decimalSeparator_expSignInfo_fraction_idx$$5$$ = $altGroupSep_intAndFraction$$.substr($decimalPos_exponentPos$$ + $decimalSeparator_expSignInfo_fraction_idx$$5$$.length));
        $exponentSymbol_integer$$ = $exponentSymbol_integer$$.split($groupingSeparator_numberingSystemKey$$4_p$$2$$).join("");
        $altGroupSep_intAndFraction$$ = $groupingSeparator_numberingSystemKey$$4_p$$2$$.replace(/\u00A0/g, " ");
        $groupingSeparator_numberingSystemKey$$4_p$$2$$ !== $altGroupSep_intAndFraction$$ && ($exponentSymbol_integer$$ = $exponentSymbol_integer$$.split($altGroupSep_intAndFraction$$).join(""));
        $groupingSeparator_numberingSystemKey$$4_p$$2$$ = $latnStr$$1_ret$$14_sign_value1$$7$$ + $exponentSymbol_integer$$;
        null !== $decimalSeparator_expSignInfo_fraction_idx$$5$$ && ($groupingSeparator_numberingSystemKey$$4_p$$2$$ += "." + $decimalSeparator_expSignInfo_fraction_idx$$5$$);
        null !== $exponent_num$$5_pos$$1_signInfo$$ && ($decimalSeparator_expSignInfo_fraction_idx$$5$$ = $_parseNegativeExponent$$($exponent_num$$5_pos$$1_signInfo$$, $error$$16_localeElementsMainNode_msg$$12$$, $numberSettings$$1$$), $groupingSeparator_numberingSystemKey$$4_p$$2$$ += "e" + ($decimalSeparator_expSignInfo_fraction_idx$$5$$[0] || "+") + $decimalSeparator_expSignInfo_fraction_idx$$5$$[1]);
        $_REGEX_PARSE_FLOAT$$.test($groupingSeparator_numberingSystemKey$$4_p$$2$$) ? $latnStr$$1_ret$$14_sign_value1$$7$$ = parseFloat($groupingSeparator_numberingSystemKey$$4_p$$2$$) : ($groupingSeparator_numberingSystemKey$$4_p$$2$$ = $_lenientParseNumber$$($str$$15$$, $numberSettings$$1$$, $error$$16_localeElementsMainNode_msg$$12$$), $latnStr$$1_ret$$14_sign_value1$$7$$ = parseFloat($groupingSeparator_numberingSystemKey$$4_p$$2$$[0] + $groupingSeparator_numberingSystemKey$$4_p$$2$$[1]));
        if (isNaN($latnStr$$1_ret$$14_sign_value1$$7$$)) {
          var $code$$3$$, $error$$16_localeElementsMainNode_msg$$12$$ = "Unparsable number " + $errStr$$ + " The expected number pattern is " + $numberSettings$$1$$.pat;
          switch($options$$141$$.style) {
            case "decimal":
              $code$$3$$ = "decimalFormatMismatch";
              break;
            case "currency":
              $code$$3$$ = "currencyFormatMismatch";
              break;
            case "percent":
              $code$$3$$ = "percentFormatMismatch";
          }
          $error$$16_localeElementsMainNode_msg$$12$$ = Error($error$$16_localeElementsMainNode_msg$$12$$);
          $error$$16_localeElementsMainNode_msg$$12$$.errorInfo = {errorCode:$code$$3$$, parameterMap:{value:$errStr$$, format:$numberSettings$$1$$.pat}};
          throw $error$$16_localeElementsMainNode_msg$$12$$;
        }
        !0 === $numberSettings$$1$$.isPercent || "percent" === $options$$141$$.style ? $latnStr$$1_ret$$14_sign_value1$$7$$ /= 100 : !0 === $numberSettings$$1$$.isPerMill && ($latnStr$$1_ret$$14_sign_value1$$7$$ /= 1E3);
        return $latnStr$$1_ret$$14_sign_value1$$7$$;
      }, resolvedOptions:function($localeElements$$31$$, $options$$142$$, $locale$$13$$) {
        if (3 > arguments.length || void 0 === $locale$$13$$) {
          $locale$$13$$ = $OraI18nUtils$$.$getLocaleElementsMainNodeKey$($localeElements$$31$$);
        }
        if (2 > arguments.length || void 0 === $options$$142$$) {
          $options$$142$$ = {useGrouping:!0, style:"decimal"};
        }
        var $numberSettings$$2_resOptions$$ = {};
        $_validateNumberOptions$$($options$$142$$, "OraNumberConverter.resolvedOptions");
        $_getNumberSettings$$($localeElements$$31$$, $numberSettings$$2_resOptions$$, $options$$142$$, $locale$$13$$);
        $numberSettings$$2_resOptions$$.numberingSystemKey = $OraI18nUtils$$.$getLanguageExtension$($locale$$13$$, "nu");
        void 0 === $OraI18nUtils$$.$numeringSystems$[$numberSettings$$2_resOptions$$.numberingSystemKey] && ($numberSettings$$2_resOptions$$.numberingSystemKey = "latn");
        $numberSettings$$2_resOptions$$ = {locale:$locale$$13$$, style:void 0 === $options$$142$$.style ? "decimal" : $options$$142$$.style, useGrouping:void 0 === $options$$142$$.useGrouping ? !0 : $options$$142$$.useGrouping, minimumIntegerDigits:$numberSettings$$2_resOptions$$.minimumIntegerDigits, minimumFractionDigits:$numberSettings$$2_resOptions$$.minimumFractionDigits, maximumFractionDigits:$numberSettings$$2_resOptions$$.maximumFractionDigits, numberingSystem:$numberSettings$$2_resOptions$$.numberingSystemKey};
        "currency" === $options$$142$$.style && ($numberSettings$$2_resOptions$$.currency = $options$$142$$.currency, $numberSettings$$2_resOptions$$.currencyDisplay = void 0 === $options$$142$$.currencyDisplay ? "symbol" : $options$$142$$.currencyDisplay);
        void 0 !== $options$$142$$.pattern && ($numberSettings$$2_resOptions$$.pattern = $options$$142$$.pattern);
        return $numberSettings$$2_resOptions$$;
      }};
    }
    var $_zeroPad$$, $_formatNumberImpl$$, $_applyPatternImpl$$, $_parseNegativePattern$$, $_lenientParseNumber$$, $_parseNegativeExponent$$, $_getNumberSettings$$, $_validateNumberOptions$$, $_throwMissingCurrency$$, $_throwNumberOutOfRange$$, $_getNumberOption$$, $_toRawFixed$$, $_toExponentialPrecision$$, $instance$$13$$, $_regionMatches$$, $_expandAffix$$, $_expandAffixes$$, $_throwSyntaxError$$, $_REGEX_INFINITY$$ = /^[+\-]?infinity$/i, $_REGEX_PARSE_FLOAT$$ = /^[+\-]?\d*\.?\d*(e[+\-]?\d+)?$/, 
    $_LENIENT_REGEX_PARSE_FLOAT$$ = /(\D*)([+\-]?\d*\.?\d*(E[+\-]?\d+)?)/, $_ESCAPE_REGEXP$$1$$ = /([\^\$\.\*\+\?\|\[\]\(\)\{\}])/g, $_REGEX_TRIM_ZEROS$$ = /(^0\.0*)([^0].*$)/;
    $_zeroPad$$ = function $$_zeroPad$$$($str$$16$$, $count$$18$$, $left$$4$$) {
      var $l$$1$$;
      for ($l$$1$$ = $str$$16$$.length;$l$$1$$ < $count$$18$$;$l$$1$$ += 1) {
        $str$$16$$ = $left$$4$$ ? "0" + $str$$16$$ : $str$$16$$ + "0";
      }
      return $str$$16$$;
    };
    $_throwNumberOutOfRange$$ = function $$_throwNumberOutOfRange$$$($value$$120$$, $minimum$$, $maximum$$, $property$$13$$) {
      var $rangeError$$1$$ = new RangeError($value$$120$$ + " is out of range.  Enter a value between " + $minimum$$ + " and " + $maximum$$ + " for " + $property$$13$$);
      $rangeError$$1$$.errorInfo = {errorCode:"numberOptionOutOfRange", parameterMap:{value:$value$$120$$, minValue:$minimum$$, maxValue:$maximum$$, propertyName:$property$$13$$}};
      throw $rangeError$$1$$;
    };
    $_getNumberOption$$ = function $$_getNumberOption$$$($options$$143_value$$121$$, $property$$14$$, $minimum$$1$$, $maximum$$1$$, $fallback$$) {
      $options$$143_value$$121$$ = $options$$143_value$$121$$[$property$$14$$];
      return void 0 !== $options$$143_value$$121$$ ? ($options$$143_value$$121$$ = Number($options$$143_value$$121$$), (isNaN($options$$143_value$$121$$) || $options$$143_value$$121$$ < $minimum$$1$$ || $options$$143_value$$121$$ > $maximum$$1$$) && $_throwNumberOutOfRange$$($options$$143_value$$121$$, $minimum$$1$$, $maximum$$1$$, $property$$14$$), Math.floor($options$$143_value$$121$$)) : $fallback$$;
    };
    $_getNumberSettings$$ = function $$_getNumberSettings$$$($lang_localeElements$$32$$, $numberSettings$$3$$, $options$$144$$, $key$$37_locale$$14_numberingSystemKey$$5_pat$$) {
      var $localeElementsMainNode$$1$$ = $OraI18nUtils$$.$getLocaleElementsMainNode$($lang_localeElements$$32$$);
      $key$$37_locale$$14_numberingSystemKey$$5_pat$$ = $OraI18nUtils$$.$getNumberingSystemKey$($localeElementsMainNode$$1$$, $key$$37_locale$$14_numberingSystemKey$$5_pat$$);
      $numberSettings$$3$$.numberingSystemKey = $key$$37_locale$$14_numberingSystemKey$$5_pat$$;
      $numberSettings$$3$$.numberingSystem = "symbols-numberSystem-" + $key$$37_locale$$14_numberingSystemKey$$5_pat$$;
      if (void 0 !== $options$$144$$.pattern && 0 < $options$$144$$.pattern.length) {
        $key$$37_locale$$14_numberingSystemKey$$5_pat$$ = $options$$144$$.pattern;
      } else {
        switch($options$$144$$.style) {
          case "decimal":
            $key$$37_locale$$14_numberingSystemKey$$5_pat$$ = "decimalFormats-numberSystem-";
            break;
          case "currency":
            $key$$37_locale$$14_numberingSystemKey$$5_pat$$ = "currencyFormats-numberSystem-";
            break;
          case "percent":
            $key$$37_locale$$14_numberingSystemKey$$5_pat$$ = "percentFormats-numberSystem-";
            break;
          default:
            $key$$37_locale$$14_numberingSystemKey$$5_pat$$ = "decimalFormats-numberSystem-";
        }
        $key$$37_locale$$14_numberingSystemKey$$5_pat$$ += $numberSettings$$3$$.numberingSystemKey;
        $key$$37_locale$$14_numberingSystemKey$$5_pat$$ = $localeElementsMainNode$$1$$.numbers[$key$$37_locale$$14_numberingSystemKey$$5_pat$$].standard;
      }
      $lang_localeElements$$32$$ = $OraI18nUtils$$.$parseBCP47$($OraI18nUtils$$.$getLocaleElementsMainNodeKey$($lang_localeElements$$32$$)).language.language;
      $numberSettings$$3$$.lang = $lang_localeElements$$32$$;
      $numberSettings$$3$$.pat = $key$$37_locale$$14_numberingSystemKey$$5_pat$$;
      $numberSettings$$3$$.minusSign = $localeElementsMainNode$$1$$.numbers[$numberSettings$$3$$.numberingSystem].minusSign;
      $numberSettings$$3$$.decimalSeparator = $localeElementsMainNode$$1$$.numbers[$numberSettings$$3$$.numberingSystem].decimal;
      $numberSettings$$3$$.exponential = $localeElementsMainNode$$1$$.numbers[$numberSettings$$3$$.numberingSystem].exponential;
      $numberSettings$$3$$.groupingSeparator = $localeElementsMainNode$$1$$.numbers[$numberSettings$$3$$.numberingSystem].group;
      $numberSettings$$3$$.currencyDisplay = $options$$144$$.currencyDisplay;
      void 0 !== $options$$144$$.currency && ($numberSettings$$3$$.currencyCode = $options$$144$$.currency.toUpperCase());
      $numberSettings$$3$$.style = $options$$144$$.style;
      $_applyPatternImpl$$($options$$144$$, $key$$37_locale$$14_numberingSystemKey$$5_pat$$, $localeElementsMainNode$$1$$, $numberSettings$$3$$);
      void 0 === $options$$144$$.pattern && ($numberSettings$$3$$.minimumIntegerDigits = $_getNumberOption$$($options$$144$$, "minimumIntegerDigits", 1, 21, $numberSettings$$3$$.minimumIntegerDigits), void 0 !== $options$$144$$.maximumFractionDigits && ($numberSettings$$3$$.maximumFractionDigits = $_getNumberOption$$($options$$144$$, "maximumFractionDigits", 0, 20, $numberSettings$$3$$.maximumFractionDigits), $numberSettings$$3$$.maximumFractionDigits < $numberSettings$$3$$.minimumFractionDigits && 
      ($numberSettings$$3$$.minimumFractionDigits = $numberSettings$$3$$.maximumFractionDigits)), void 0 !== $options$$144$$.minimumFractionDigits && ($numberSettings$$3$$.minimumFractionDigits = $_getNumberOption$$($options$$144$$, "minimumFractionDigits", 0, 20, $numberSettings$$3$$.minimumFractionDigits)), $numberSettings$$3$$.maximumFractionDigits < $numberSettings$$3$$.minimumFractionDigits && ($numberSettings$$3$$.maximumFractionDigits = $numberSettings$$3$$.minimumFractionDigits));
    };
    $_throwMissingCurrency$$ = function $$_throwMissingCurrency$$$($prop$$49$$) {
      var $typeError$$ = new TypeError('The property "currency" is required whenthe property "' + $prop$$49$$ + '" is "currency". An accepted value is a three-letter ISO 4217 currency code.');
      $typeError$$.errorInfo = {errorCode:"optionTypesMismatch", parameterMap:{propertyName:$prop$$49$$, propertyValue:"currency", requiredPropertyName:"currency", requiredPropertyValueValid:"a three-letter ISO 4217 currency code"}};
      throw $typeError$$;
    };
    $_validateNumberOptions$$ = function $$_validateNumberOptions$$$($options$$145$$, $caller$$7$$) {
      var $c$$19_getOption$$8$$ = $OraI18nUtils$$.$getGetOption$($options$$145$$, $caller$$7$$), $s$$3$$ = $c$$19_getOption$$8$$("style", "string", ["currency", "decimal", "percent", "perMill"], "decimal"), $c$$19_getOption$$8$$ = $c$$19_getOption$$8$$("currency", "string");
      "currency" === $s$$3$$ && void 0 === $c$$19_getOption$$8$$ && $_throwMissingCurrency$$("style");
    };
    $_toExponentialPrecision$$ = function $$_toExponentialPrecision$$$($number$$, $numberSettings$$4$$) {
      var $numStr0_posExp$$ = $number$$ + "", $str1_trimExp$$ = 0, $numStr1_split$$ = $numStr0_posExp$$.split(/e/i), $numStr$$ = $numStr1_split$$[0];
      $_REGEX_TRIM_ZEROS$$.lastIndex = 0;
      var $exponent$$1_match$$10$$ = $_REGEX_TRIM_ZEROS$$.exec($numStr$$);
      null !== $exponent$$1_match$$10$$ ? ($str1_trimExp$$ = $exponent$$1_match$$10$$[1].length - 1, $numStr$$ = $exponent$$1_match$$10$$[2]) : $numStr$$ = $numStr$$.replace(".", "");
      var $exponent$$1_match$$10$$ = 1 < $numStr1_split$$.length ? parseInt($numStr1_split$$[1], 10) : 0, $numStr1_split$$ = parseInt($numStr$$, 10), $len$$6_padLen$$ = $numberSettings$$4$$.minimumIntegerDigits + $numberSettings$$4$$.maximumFractionDigits;
      $numStr$$.length > $len$$6_padLen$$ && ($len$$6_padLen$$ -= $numStr$$.length, $numStr1_split$$ = Math.round($numStr1_split$$ * Math.pow(10, $len$$6_padLen$$)));
      $len$$6_padLen$$ = $numberSettings$$4$$.minimumIntegerDigits + $numberSettings$$4$$.minimumFractionDigits;
      $numStr1_split$$ = $_zeroPad$$($numStr1_split$$ + "", $len$$6_padLen$$, !1);
      $exponent$$1_match$$10$$ = -1 !== $numStr0_posExp$$.indexOf(".") ? $exponent$$1_match$$10$$ - ($numberSettings$$4$$.minimumIntegerDigits - $numStr0_posExp$$.indexOf(".") + $str1_trimExp$$) : $exponent$$1_match$$10$$ - ($len$$6_padLen$$ - $numStr$$.length - $numberSettings$$4$$.minimumFractionDigits);
      $numStr0_posExp$$ = Math.abs($exponent$$1_match$$10$$);
      $numStr0_posExp$$ = $_zeroPad$$($numStr0_posExp$$ + "", $numberSettings$$4$$.minExponentDigits, !0);
      0 > $exponent$$1_match$$10$$ && ($numStr0_posExp$$ = $numberSettings$$4$$.minusSign + $numStr0_posExp$$);
      $str1_trimExp$$ = $numStr1_split$$.slice(0, $numberSettings$$4$$.minimumIntegerDigits);
      return $str1_trimExp$$ = 0 < $numStr1_split$$.slice($numberSettings$$4$$.minimumIntegerDigits).length ? $str1_trimExp$$ + ($numberSettings$$4$$.decimalSeparator + $numStr1_split$$.slice($numberSettings$$4$$.minimumIntegerDigits) + $numberSettings$$4$$.exponential + $numStr0_posExp$$) : $str1_trimExp$$ + ($numberSettings$$4$$.exponential + $numStr0_posExp$$);
    };
    $_toRawFixed$$ = function $$_toRawFixed$$$($number$$1_sep$$1$$, $options$$146_stringIndex$$, $numberSettings$$5$$) {
      var $curSize_rets$$ = $numberSettings$$5$$.groupingSize, $factor$$2_numberString_rounded$$, $split$$1$$ = ($number$$1_sep$$1$$ + "").split(/e/i), $exponent$$2$$ = 1 < $split$$1$$.length ? parseInt($split$$1$$[1], 10) : 0;
      $factor$$2_numberString_rounded$$ = $split$$1$$[0];
      var $split$$1$$ = $factor$$2_numberString_rounded$$.split("."), $right$$4$$ = 1 < $split$$1$$.length ? $split$$1$$[1] : "";
      if (1 < $split$$1$$.length && $right$$4$$.length > $exponent$$2$$) {
        var $precision_ret$$15$$ = Math.min($numberSettings$$5$$.maximumFractionDigits, $right$$4$$.length - $exponent$$2$$);
        $factor$$2_numberString_rounded$$ = Math.pow(10, $precision_ret$$15$$);
        $factor$$2_numberString_rounded$$ = Math.round($number$$1_sep$$1$$ * $factor$$2_numberString_rounded$$) / $factor$$2_numberString_rounded$$;
        isFinite($factor$$2_numberString_rounded$$) || ($factor$$2_numberString_rounded$$ = $number$$1_sep$$1$$);
        $number$$1_sep$$1$$ = $factor$$2_numberString_rounded$$;
      }
      $split$$1$$ = ($number$$1_sep$$1$$ + "").split(/e/i);
      $exponent$$2$$ = 1 < $split$$1$$.length ? parseInt($split$$1$$[1], 10) : 0;
      $factor$$2_numberString_rounded$$ = $split$$1$$[0];
      $split$$1$$ = $factor$$2_numberString_rounded$$.split(".");
      $factor$$2_numberString_rounded$$ = $split$$1$$[0];
      $right$$4$$ = 1 < $split$$1$$.length ? $split$$1$$[1] : "";
      0 < $exponent$$2$$ ? ($right$$4$$ = $_zeroPad$$($right$$4$$, $exponent$$2$$, !1), $factor$$2_numberString_rounded$$ += $right$$4$$.slice(0, $exponent$$2$$), $right$$4$$ = $right$$4$$.substr($exponent$$2$$)) : 0 > $exponent$$2$$ && ($exponent$$2$$ = -$exponent$$2$$, $factor$$2_numberString_rounded$$ = $_zeroPad$$($factor$$2_numberString_rounded$$, $exponent$$2$$ + 1, !0), $right$$4$$ = $factor$$2_numberString_rounded$$.slice(-$exponent$$2$$, $factor$$2_numberString_rounded$$.length) + $right$$4$$, 
      $factor$$2_numberString_rounded$$ = $factor$$2_numberString_rounded$$.slice(0, -$exponent$$2$$));
      $right$$4$$ = 0 < $precision_ret$$15$$ ? $numberSettings$$5$$.decimalSeparator + ($right$$4$$.length > $precision_ret$$15$$ ? $right$$4$$.slice(0, $precision_ret$$15$$) : $_zeroPad$$($right$$4$$, $precision_ret$$15$$, !1)) : 0 < $numberSettings$$5$$.minimumFractionDigits ? $numberSettings$$5$$.decimalSeparator : "";
      $right$$4$$ = $_zeroPad$$($right$$4$$, $numberSettings$$5$$.decimalSeparator.length + $numberSettings$$5$$.minimumFractionDigits, !1);
      $number$$1_sep$$1$$ = $numberSettings$$5$$.groupingSeparator;
      $precision_ret$$15$$ = "";
      !1 === $options$$146_stringIndex$$.useGrouping && void 0 === $options$$146_stringIndex$$.pattern && ($number$$1_sep$$1$$ = "");
      $factor$$2_numberString_rounded$$ = $_zeroPad$$($factor$$2_numberString_rounded$$, $numberSettings$$5$$.minimumIntegerDigits, !0);
      $options$$146_stringIndex$$ = $factor$$2_numberString_rounded$$.length - 1;
      for ($right$$4$$ = 1 < $right$$4$$.length ? $right$$4$$ : "";0 <= $options$$146_stringIndex$$;) {
        if (0 === $curSize_rets$$ || $curSize_rets$$ > $options$$146_stringIndex$$) {
          return $curSize_rets$$ = $factor$$2_numberString_rounded$$.slice(0, $options$$146_stringIndex$$ + 1) + ($precision_ret$$15$$.length ? $number$$1_sep$$1$$ + $precision_ret$$15$$ + $right$$4$$ : $right$$4$$);
        }
        $precision_ret$$15$$ = $factor$$2_numberString_rounded$$.slice($options$$146_stringIndex$$ - $curSize_rets$$ + 1, $options$$146_stringIndex$$ + 1) + ($precision_ret$$15$$.length ? $number$$1_sep$$1$$ + $precision_ret$$15$$ : "");
        $options$$146_stringIndex$$ -= $curSize_rets$$;
      }
      return $curSize_rets$$ = $factor$$2_numberString_rounded$$.slice(0, $options$$146_stringIndex$$ + 1) + $number$$1_sep$$1$$ + $precision_ret$$15$$ + $right$$4$$;
    };
    $_formatNumberImpl$$ = function $$_formatNumberImpl$$$($numberingSystemKey$$6_value$$122$$, $options$$147_ret$$16$$, $localeElements$$33_localeElementsMainNode$$2_number$$2$$, $idx$$6_numberSettings$$6$$, $locale$$15_nativeRet$$1$$) {
      $localeElements$$33_localeElementsMainNode$$2_number$$2$$ = $OraI18nUtils$$.$getLocaleElementsMainNode$($localeElements$$33_localeElementsMainNode$$2_number$$2$$);
      if (!isFinite($numberingSystemKey$$6_value$$122$$)) {
        return Infinity === $numberingSystemKey$$6_value$$122$$ || -Infinity === $numberingSystemKey$$6_value$$122$$ ? $localeElements$$33_localeElementsMainNode$$2_number$$2$$.numbers[$idx$$6_numberSettings$$6$$.numberingSystem].infinity : $localeElements$$33_localeElementsMainNode$$2_number$$2$$.numbers[$idx$$6_numberSettings$$6$$.numberingSystem].nan;
      }
      $localeElements$$33_localeElementsMainNode$$2_number$$2$$ = Math.abs($numberingSystemKey$$6_value$$122$$);
      !0 === $idx$$6_numberSettings$$6$$.isPercent || "percent" === $options$$147_ret$$16$$.style ? $localeElements$$33_localeElementsMainNode$$2_number$$2$$ *= 100 : !0 === $idx$$6_numberSettings$$6$$.isPerMill && ($localeElements$$33_localeElementsMainNode$$2_number$$2$$ *= 1E3);
      $localeElements$$33_localeElementsMainNode$$2_number$$2$$ = !0 == $idx$$6_numberSettings$$6$$.useExponentialNotation ? $_toExponentialPrecision$$($localeElements$$33_localeElementsMainNode$$2_number$$2$$, $idx$$6_numberSettings$$6$$) : $_toRawFixed$$($localeElements$$33_localeElementsMainNode$$2_number$$2$$, $options$$147_ret$$16$$, $idx$$6_numberSettings$$6$$);
      $options$$147_ret$$16$$ = "";
      $options$$147_ret$$16$$ = 0 > $numberingSystemKey$$6_value$$122$$ ? $options$$147_ret$$16$$ + ($idx$$6_numberSettings$$6$$.negativePrefix + $localeElements$$33_localeElementsMainNode$$2_number$$2$$ + $idx$$6_numberSettings$$6$$.negativeSuffix) : $options$$147_ret$$16$$ + ($idx$$6_numberSettings$$6$$.positivePrefix + $localeElements$$33_localeElementsMainNode$$2_number$$2$$ + $idx$$6_numberSettings$$6$$.positiveSuffix);
      $numberingSystemKey$$6_value$$122$$ = $OraI18nUtils$$.$getLanguageExtension$($locale$$15_nativeRet$$1$$, "nu");
      void 0 === $OraI18nUtils$$.$numeringSystems$[$numberingSystemKey$$6_value$$122$$] && ($numberingSystemKey$$6_value$$122$$ = "latn");
      if ("latn" !== $numberingSystemKey$$6_value$$122$$) {
        $locale$$15_nativeRet$$1$$ = [];
        for ($idx$$6_numberSettings$$6$$ = 0;$idx$$6_numberSettings$$6$$ < $options$$147_ret$$16$$.length;$idx$$6_numberSettings$$6$$++) {
          "0" <= $options$$147_ret$$16$$[$idx$$6_numberSettings$$6$$] && "9" >= $options$$147_ret$$16$$[$idx$$6_numberSettings$$6$$] ? $locale$$15_nativeRet$$1$$.push($OraI18nUtils$$.$numeringSystems$[$numberingSystemKey$$6_value$$122$$][$options$$147_ret$$16$$[$idx$$6_numberSettings$$6$$]]) : $locale$$15_nativeRet$$1$$.push($options$$147_ret$$16$$[$idx$$6_numberSettings$$6$$]);
        }
        return $locale$$15_nativeRet$$1$$.join("");
      }
      return $options$$147_ret$$16$$;
    };
    $_parseNegativePattern$$ = function $$_parseNegativePattern$$$($num$$6_value$$123$$, $options$$148_symbol$$1$$, $numberSettings$$7$$, $localeElements$$34$$) {
      $num$$6_value$$123$$ = $OraI18nUtils$$.$trimNumber$($num$$6_value$$123$$);
      var $sign$$1$$ = "", $exactMatch$$ = !1, $nbSettingNegSuffix_posSignRegExp$$ = new RegExp("^" + $localeElements$$34$$.numbers[$numberSettings$$7$$.numberingSystem].plusSign.replace($_ESCAPE_REGEXP$$1$$, "\\$1"));
      $num$$6_value$$123$$ = $num$$6_value$$123$$.replace($nbSettingNegSuffix_posSignRegExp$$, "");
      var $nbSettingPosPrefix$$ = $OraI18nUtils$$.$trimNumber$($numberSettings$$7$$.positivePrefix), $nbSettingPosSuffix_posSuffix$$ = $OraI18nUtils$$.$trimNumber$($numberSettings$$7$$.positiveSuffix), $nbSettingNegPrefix_negPrefix$$ = $OraI18nUtils$$.$trimNumber$($numberSettings$$7$$.negativePrefix), $nbSettingNegSuffix_posSignRegExp$$ = $OraI18nUtils$$.$trimNumber$($numberSettings$$7$$.negativeSuffix), $code$$4_posPrefRegexp_posPrefix$$ = new RegExp("^" + ($nbSettingPosPrefix$$ || "").replace($_ESCAPE_REGEXP$$1$$, 
      "\\$1")), $posSuffRegexp$$ = new RegExp(($nbSettingPosSuffix_posSuffix$$ || "").replace($_ESCAPE_REGEXP$$1$$, "\\$1") + "$"), $negPrefRegexp$$ = new RegExp("^" + ($nbSettingNegPrefix_negPrefix$$ || "").replace($_ESCAPE_REGEXP$$1$$, "\\$1")), $negSuffRegexp$$ = new RegExp(($nbSettingNegSuffix_posSignRegExp$$ || "").replace($_ESCAPE_REGEXP$$1$$, "\\$1") + "$");
      if (!0 == $negPrefRegexp$$.test($num$$6_value$$123$$) && !0 == $negSuffRegexp$$.test($num$$6_value$$123$$)) {
        $num$$6_value$$123$$ = $num$$6_value$$123$$.replace($negPrefRegexp$$, ""), $num$$6_value$$123$$ = $num$$6_value$$123$$.replace($negSuffRegexp$$, ""), $sign$$1$$ = "-", $exactMatch$$ = !0;
      } else {
        if (!0 == $code$$4_posPrefRegexp_posPrefix$$.test($num$$6_value$$123$$) && !0 == $posSuffRegexp$$.test($num$$6_value$$123$$)) {
          $num$$6_value$$123$$ = $num$$6_value$$123$$.replace($code$$4_posPrefRegexp_posPrefix$$, ""), $num$$6_value$$123$$ = $num$$6_value$$123$$.replace($posSuffRegexp$$, ""), $sign$$1$$ = "+", $exactMatch$$ = !0;
        } else {
          if ("currency" === $options$$148_symbol$$1$$.style) {
            $options$$148_symbol$$1$$ = $code$$4_posPrefRegexp_posPrefix$$ = $numberSettings$$7$$.currencyCode;
            var $negSuffix_repStr$$;
            void 0 !== $localeElements$$34$$.numbers.currencies[$code$$4_posPrefRegexp_posPrefix$$] && ($options$$148_symbol$$1$$ = $localeElements$$34$$.numbers.currencies[$code$$4_posPrefRegexp_posPrefix$$].symbol);
            void 0 === $numberSettings$$7$$.currencyDisplay || "symbol" === $numberSettings$$7$$.currencyDisplay ? $negSuffix_repStr$$ = $options$$148_symbol$$1$$ : "code" === $numberSettings$$7$$.currencyDisplay && ($negSuffix_repStr$$ = $code$$4_posPrefRegexp_posPrefix$$);
            void 0 !== $negSuffix_repStr$$ && ($code$$4_posPrefRegexp_posPrefix$$ = ($nbSettingPosPrefix$$ || "").replace($negSuffix_repStr$$, ""), $nbSettingPosSuffix_posSuffix$$ = ($nbSettingPosSuffix_posSuffix$$ || "").replace($negSuffix_repStr$$, ""), $nbSettingNegPrefix_negPrefix$$ = ($nbSettingNegPrefix_negPrefix$$ || "").replace($negSuffix_repStr$$, ""), $negSuffix_repStr$$ = ($nbSettingNegSuffix_posSignRegExp$$ || "").replace($negSuffix_repStr$$, ""), $code$$4_posPrefRegexp_posPrefix$$ = 
            new RegExp(("^" + $code$$4_posPrefRegexp_posPrefix$$).replace($_ESCAPE_REGEXP$$1$$, "\\$1")), $posSuffRegexp$$ = new RegExp($nbSettingPosSuffix_posSuffix$$.replace($_ESCAPE_REGEXP$$1$$, "\\$1") + "$"), $negPrefRegexp$$ = new RegExp(("^" + $nbSettingNegPrefix_negPrefix$$).replace($_ESCAPE_REGEXP$$1$$, "\\$1")), $negSuffRegexp$$ = new RegExp($negSuffix_repStr$$.replace($_ESCAPE_REGEXP$$1$$, "\\$1") + "$"), !0 == $negPrefRegexp$$.test($num$$6_value$$123$$) && !0 == $negSuffRegexp$$.test($num$$6_value$$123$$) ? 
            ($num$$6_value$$123$$ = $num$$6_value$$123$$.replace($negPrefRegexp$$, ""), $num$$6_value$$123$$ = $num$$6_value$$123$$.replace($negSuffRegexp$$, ""), $sign$$1$$ = "-", $exactMatch$$ = !0) : !0 == $code$$4_posPrefRegexp_posPrefix$$.test($num$$6_value$$123$$) && !0 == $posSuffRegexp$$.test($num$$6_value$$123$$) && ($num$$6_value$$123$$ = $num$$6_value$$123$$.replace($code$$4_posPrefRegexp_posPrefix$$, ""), $num$$6_value$$123$$ = $num$$6_value$$123$$.replace($posSuffRegexp$$, ""), $sign$$1$$ = 
            "+", $exactMatch$$ = !0));
          }
        }
      }
      return $exactMatch$$ ? [$sign$$1$$, $num$$6_value$$123$$] : $_lenientParseNumber$$($num$$6_value$$123$$, $numberSettings$$7$$, $localeElements$$34$$);
    };
    $_lenientParseNumber$$ = function $$_lenientParseNumber$$$($num$$7$$, $exponential_numberSettings$$8$$, $localeElements$$35$$) {
      var $groupingSeparator$$1_match$$11$$ = $localeElements$$35$$.numbers[$exponential_numberSettings$$8$$.numberingSystem].group, $altGroupSep$$1_decimalSeparator$$1$$ = $localeElements$$35$$.numbers[$exponential_numberSettings$$8$$.numberingSystem].decimal, $sign$$2$$ = "", $dot_resNum$$ = "";
      $exponential_numberSettings$$8$$ = $OraI18nUtils$$.$toUpper$($localeElements$$35$$.numbers[$exponential_numberSettings$$8$$.numberingSystem].exponential);
      $num$$7$$ = $OraI18nUtils$$.$toUpper$($num$$7$$);
      $num$$7$$ = $num$$7$$.split($exponential_numberSettings$$8$$).join("E");
      $num$$7$$ = $num$$7$$.split($altGroupSep$$1_decimalSeparator$$1$$).join(".");
      $num$$7$$ = $num$$7$$.split($groupingSeparator$$1_match$$11$$).join("");
      $altGroupSep$$1_decimalSeparator$$1$$ = $groupingSeparator$$1_match$$11$$.replace(/\u00A0/g, " ");
      $groupingSeparator$$1_match$$11$$ !== $altGroupSep$$1_decimalSeparator$$1$$ && ($num$$7$$ = $num$$7$$.split($altGroupSep$$1_decimalSeparator$$1$$).join(""));
      "." === $num$$7$$.charAt(0) && ($num$$7$$ = $num$$7$$.substr(1), $dot_resNum$$ = ".");
      $groupingSeparator$$1_match$$11$$ = $_LENIENT_REGEX_PARSE_FLOAT$$.exec($num$$7$$);
      $dot_resNum$$ += $groupingSeparator$$1_match$$11$$[2];
      $OraI18nUtils$$.$startsWith$($dot_resNum$$, "-") ? ($dot_resNum$$ = $dot_resNum$$.substr(1), $sign$$2$$ = "-") : $OraI18nUtils$$.$startsWith$($num$$7$$, "+") && ($dot_resNum$$ = $dot_resNum$$.substr(1), $sign$$2$$ = "+");
      return[$sign$$2$$, $dot_resNum$$];
    };
    $_parseNegativeExponent$$ = function $$_parseNegativeExponent$$$($value$$124$$, $localeElements$$36_pos$$2$$, $numberSettings$$9$$) {
      var $neg$$ = $localeElements$$36_pos$$2$$.numbers[$numberSettings$$9$$.numberingSystem].minusSign;
      $localeElements$$36_pos$$2$$ = $localeElements$$36_pos$$2$$.numbers[$numberSettings$$9$$.numberingSystem].plusSign;
      var $ret$$18$$;
      $value$$124$$ = $OraI18nUtils$$.$trimNumber$($value$$124$$);
      $neg$$ = $OraI18nUtils$$.$trimNumber$($neg$$);
      $localeElements$$36_pos$$2$$ = $OraI18nUtils$$.$trimNumber$($localeElements$$36_pos$$2$$);
      $OraI18nUtils$$.$startsWith$($value$$124$$, $neg$$) ? $ret$$18$$ = ["-", $value$$124$$.substr($neg$$.length)] : $OraI18nUtils$$.$startsWith$($value$$124$$, $OraI18nUtils$$.$trimNumber$($localeElements$$36_pos$$2$$)) && ($ret$$18$$ = ["+", $value$$124$$.substr($localeElements$$36_pos$$2$$.length)]);
      return $ret$$18$$ || ["", $value$$124$$];
    };
    var $posPrefixPattern$$, $posSuffixPattern$$, $negPrefixPattern$$, $negSuffixPattern$$;
    $_throwSyntaxError$$ = function $$_throwSyntaxError$$$($pattern$$6$$) {
      var $syntaxError$$;
      $syntaxError$$ = new SyntaxError('Unexpected character(s) encountered in the pattern "' + $pattern$$6$$ + ' An example of a valid pattern is "#,##0.###".');
      $syntaxError$$.errorInfo = {errorCode:"optionValueInvalid", parameterMap:{propertyName:"pattern", propertyValue:$pattern$$6$$, propertyValueHint:"#,##0.###"}};
      throw $syntaxError$$;
    };
    $_regionMatches$$ = function $$_regionMatches$$$($str1$$1$$, $offset1$$, $str2$$1$$) {
      return null !== (new RegExp($str2$$1$$, "i")).exec($str1$$1$$.substr($offset1$$, $str2$$1$$.length));
    };
    $_expandAffixes$$ = function $$_expandAffixes$$$($localeElements$$37$$, $numberSettings$$10$$) {
      var $curDisplay$$ = {};
      null != $posPrefixPattern$$ && ($numberSettings$$10$$.positivePrefix = $_expandAffix$$($posPrefixPattern$$, $localeElements$$37$$, $numberSettings$$10$$, $curDisplay$$));
      null != $posSuffixPattern$$ && ($numberSettings$$10$$.positiveSuffix = $_expandAffix$$($posSuffixPattern$$, $localeElements$$37$$, $numberSettings$$10$$, $curDisplay$$));
      null != $negPrefixPattern$$ && ($numberSettings$$10$$.negativePrefix = $_expandAffix$$($negPrefixPattern$$, $localeElements$$37$$, $numberSettings$$10$$, $curDisplay$$));
      null != $negSuffixPattern$$ && ($numberSettings$$10$$.negativeSuffix = $_expandAffix$$($negSuffixPattern$$, $localeElements$$37$$, $numberSettings$$10$$, $curDisplay$$));
      void 0 !== $curDisplay$$.name && ($numberSettings$$10$$.positiveSuffix = "\u00a0" + $curDisplay$$.name, $numberSettings$$10$$.positivePrefix = "", "ar" === $numberSettings$$10$$.lang ? ($numberSettings$$10$$.negativeSuffix = $localeElements$$37$$.numbers[$numberSettings$$10$$.numberingSystem].minusSign + "\u00a0" + $curDisplay$$.name, $numberSettings$$10$$.negativePrefix = "") : ($numberSettings$$10$$.negativeSuffix = "\u00a0" + $curDisplay$$.name, $numberSettings$$10$$.negativePrefix = $localeElements$$37$$.numbers[$numberSettings$$10$$.numberingSystem].minusSign));
    };
    $_expandAffix$$ = function $$_expandAffix$$$($pattern$$7$$, $localeElements$$38$$, $numberSettings$$11$$, $currencyDisplay$$) {
      for (var $buffer$$9$$ = "", $i$$95$$ = 0;$i$$95$$ < $pattern$$7$$.length;) {
        var $c$$20_code$$5$$ = $pattern$$7$$.charAt($i$$95$$++);
        if ("'" != $c$$20_code$$5$$) {
          switch($c$$20_code$$5$$) {
            case "\u00a4":
              var $name$$75$$ = $c$$20_code$$5$$ = $numberSettings$$11$$.currencyCode, $symbol$$2$$ = $c$$20_code$$5$$;
              void 0 !== $localeElements$$38$$.numbers.currencies[$c$$20_code$$5$$] && ($name$$75$$ = $localeElements$$38$$.numbers.currencies[$c$$20_code$$5$$].displayName, $symbol$$2$$ = $localeElements$$38$$.numbers.currencies[$c$$20_code$$5$$].symbol);
              void 0 === $numberSettings$$11$$.currencyDisplay || "symbol" === $numberSettings$$11$$.currencyDisplay ? $c$$20_code$$5$$ = $symbol$$2$$ : "code" !== $numberSettings$$11$$.currencyDisplay && ($c$$20_code$$5$$ = $name$$75$$, $currencyDisplay$$.name = $c$$20_code$$5$$);
              break;
            case "%":
              $c$$20_code$$5$$ = $localeElements$$38$$.numbers[$numberSettings$$11$$.numberingSystem].percentSign;
              break;
            case "\u2030":
              $c$$20_code$$5$$ = $localeElements$$38$$.numbers[$numberSettings$$11$$.numberingSystem].perMille;
              break;
            case "-":
              $c$$20_code$$5$$ = $localeElements$$38$$.numbers[$numberSettings$$11$$.numberingSystem].minusSign;
          }
          $buffer$$9$$ = $buffer$$9$$.concat($c$$20_code$$5$$);
        }
      }
      return $buffer$$9$$;
    };
    $_applyPatternImpl$$ = function $$_applyPatternImpl$$$($options$$149$$, $pattern$$8$$, $localeElements$$39$$, $numberSettings$$12$$) {
      for (var $gotNegative$$ = !1, $useExponentialNotation$$ = !1, $phaseOneLength$$ = 0, $start$$19$$ = 0, $isPrefix$$ = !0, $j$$16$$ = 1;0 <= $j$$16$$ && $start$$19$$ < $pattern$$8$$.length;--$j$$16$$) {
        for (var $digitTotalCount_inQuote$$ = !1, $prefix$$14$$ = "", $suffix$$ = "", $decimalPos$$1$$ = -1, $multiplier$$ = 1, $digitLeftCount$$ = 0, $n$$14_zeroDigitCount$$ = 0, $digitRightCount$$ = 0, $groupingCount$$ = -1, $minExponentDigits$$, $phase$$ = 0, $isPrefix$$ = !0, $pos$$3$$ = $start$$19$$;$pos$$3$$ < $pattern$$8$$.length;++$pos$$3$$) {
          var $ch$$1_doubled$$ = $pattern$$8$$.charAt($pos$$3$$);
          switch($phase$$) {
            case 0:
            ;
            case 2:
              if ($digitTotalCount_inQuote$$) {
                if ("'" === $ch$$1_doubled$$) {
                  $pos$$3$$ + 1 < $pattern$$8$$.length && "'" === $pattern$$8$$.charAt($pos$$3$$ + 1) ? (++$pos$$3$$, $isPrefix$$ ? $prefix$$14$$ = $prefix$$14$$.concat("''") : $suffix$$ = $suffix$$.concat("''")) : $digitTotalCount_inQuote$$ = !1;
                  continue;
                }
              } else {
                if ("#" === $ch$$1_doubled$$ || "0" === $ch$$1_doubled$$ || "," === $ch$$1_doubled$$ || "." === $ch$$1_doubled$$) {
                  $phase$$ = 1;
                  --$pos$$3$$;
                  continue;
                } else {
                  if ("\u00a4" === $ch$$1_doubled$$) {
                    void 0 === $options$$149$$.currency && $_throwMissingCurrency$$("pattern");
                    $options$$149$$.style = "currency";
                    ($ch$$1_doubled$$ = $pos$$3$$ + 1 < $pattern$$8$$.length && "\u00a4" === $pattern$$8$$.charAt($pos$$3$$ + 1)) && ++$pos$$3$$;
                    $isPrefix$$ ? $prefix$$14$$ = $prefix$$14$$.concat($ch$$1_doubled$$ ? "'\u00a4\u00a4" : "'\u00a4") : $suffix$$ = $suffix$$.concat($ch$$1_doubled$$ ? "'\u00a4\u00a4" : "'\u00a4");
                    continue;
                  } else {
                    if ("'" === $ch$$1_doubled$$) {
                      if ("'" == $ch$$1_doubled$$) {
                        $pos$$3$$ + 1 < $pattern$$8$$.length && "'" == $pattern$$8$$.charAt($pos$$3$$ + 1) ? (++$pos$$3$$, $isPrefix$$ ? $prefix$$14$$ = $prefix$$14$$.concat("''") : $suffix$$ = $suffix$$.concat("''")) : $digitTotalCount_inQuote$$ = !0;
                        continue;
                      }
                    } else {
                      if (";" === $ch$$1_doubled$$) {
                        0 !== $phase$$ && 0 !== $j$$16$$ || $_throwSyntaxError$$($pattern$$8$$);
                        $start$$19$$ = $pos$$3$$ + 1;
                        $pos$$3$$ = $pattern$$8$$.length;
                        continue;
                      } else {
                        if ("%" === $ch$$1_doubled$$) {
                          $options$$149$$.style = "percent";
                          1 != $multiplier$$ && $_throwSyntaxError$$($pattern$$8$$);
                          $numberSettings$$12$$.isPercent = !0;
                          $multiplier$$ = 100;
                          $isPrefix$$ ? $prefix$$14$$ = $prefix$$14$$.concat("'%") : $suffix$$ = $suffix$$.concat("'%");
                          continue;
                        } else {
                          if ("\u2030" === $ch$$1_doubled$$) {
                            1 != $multiplier$$ && $_throwSyntaxError$$($pattern$$8$$);
                            $options$$149$$.style = "perMill";
                            $numberSettings$$12$$.isPerMill = !0;
                            $multiplier$$ = 1E3;
                            $isPrefix$$ ? $prefix$$14$$ = $prefix$$14$$.concat("'\u2030") : $suffix$$ = $suffix$$.concat("'\u2030");
                            continue;
                          } else {
                            if ("-" === $ch$$1_doubled$$) {
                              $isPrefix$$ ? $prefix$$14$$ = $prefix$$14$$.concat("'-") : $suffix$$ = $suffix$$.concat("'-");
                              continue;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              $isPrefix$$ ? $prefix$$14$$ = $prefix$$14$$.concat($ch$$1_doubled$$) : $suffix$$ = $suffix$$.concat($ch$$1_doubled$$);
              break;
            case 1:
              if (1 === $j$$16$$) {
                ++$phaseOneLength$$;
              } else {
                0 === --$phaseOneLength$$ && ($phase$$ = 2, $isPrefix$$ = !1);
                continue;
              }
              if ("#" === $ch$$1_doubled$$) {
                0 < $n$$14_zeroDigitCount$$ ? ++$digitRightCount$$ : ++$digitLeftCount$$, 0 <= $groupingCount$$ && 0 > $decimalPos$$1$$ && ++$groupingCount$$;
              } else {
                if ("0" === $ch$$1_doubled$$) {
                  0 < $digitRightCount$$ && $_throwSyntaxError$$($pattern$$8$$), ++$n$$14_zeroDigitCount$$, 0 <= $groupingCount$$ && 0 > $decimalPos$$1$$ && ++$groupingCount$$;
                } else {
                  if ("," === $ch$$1_doubled$$) {
                    $groupingCount$$ = 0;
                  } else {
                    if ("." === $ch$$1_doubled$$) {
                      0 <= $decimalPos$$1$$ && $_throwSyntaxError$$($pattern$$8$$), $decimalPos$$1$$ = $digitLeftCount$$ + $n$$14_zeroDigitCount$$ + $digitRightCount$$;
                    } else {
                      if ($_regionMatches$$($pattern$$8$$, $pos$$3$$, "E")) {
                        $useExponentialNotation$$ && $_throwSyntaxError$$($pattern$$8$$);
                        $useExponentialNotation$$ = !0;
                        $minExponentDigits$$ = 0;
                        for ($pos$$3$$ += 1;$pos$$3$$ < $pattern$$8$$.length && "0" === $pattern$$8$$.charAt($pos$$3$$);) {
                          ++$minExponentDigits$$, ++$phaseOneLength$$, ++$pos$$3$$;
                        }
                        (1 > $digitLeftCount$$ + $n$$14_zeroDigitCount$$ || 1 > $minExponentDigits$$) && $_throwSyntaxError$$($pattern$$8$$);
                        $phase$$ = 2;
                        $isPrefix$$ = !1;
                        --$pos$$3$$;
                      } else {
                        $phase$$ = 2, $isPrefix$$ = !1, --$pos$$3$$, --$phaseOneLength$$;
                      }
                    }
                  }
                }
              }
            ;
          }
        }
        0 === $n$$14_zeroDigitCount$$ && 0 < $digitLeftCount$$ && 0 <= $decimalPos$$1$$ && ($n$$14_zeroDigitCount$$ = $decimalPos$$1$$, 0 === $n$$14_zeroDigitCount$$ && ++$n$$14_zeroDigitCount$$, $digitRightCount$$ = $digitLeftCount$$ - $n$$14_zeroDigitCount$$, $digitLeftCount$$ = $n$$14_zeroDigitCount$$ - 1, $n$$14_zeroDigitCount$$ = 1);
        (0 > $decimalPos$$1$$ && 0 < $digitRightCount$$ || 0 <= $decimalPos$$1$$ && ($decimalPos$$1$$ < $digitLeftCount$$ || $decimalPos$$1$$ > $digitLeftCount$$ + $n$$14_zeroDigitCount$$) || 0 == $groupingCount$$ || $digitTotalCount_inQuote$$) && $_throwSyntaxError$$($pattern$$8$$);
        1 === $j$$16$$ ? ($posPrefixPattern$$ = $prefix$$14$$, $posSuffixPattern$$ = $suffix$$, $negPrefixPattern$$ = $posPrefixPattern$$, $negSuffixPattern$$ = $posSuffixPattern$$, $digitTotalCount_inQuote$$ = $digitLeftCount$$ + $n$$14_zeroDigitCount$$ + $digitRightCount$$, $numberSettings$$12$$.minimumIntegerDigits = (0 <= $decimalPos$$1$$ ? $decimalPos$$1$$ : $digitTotalCount_inQuote$$) - $digitLeftCount$$, $numberSettings$$12$$.maximumIntegerDigits = $useExponentialNotation$$ ? $digitLeftCount$$ + 
        $numberSettings$$12$$.minimumIntegerDigits : 2147483647, $numberSettings$$12$$.maximumFractionDigits = 0 <= $decimalPos$$1$$ ? $digitTotalCount_inQuote$$ - $decimalPos$$1$$ : 0, $numberSettings$$12$$.minimumFractionDigits = 0 <= $decimalPos$$1$$ ? $digitLeftCount$$ + $n$$14_zeroDigitCount$$ - $decimalPos$$1$$ : 0, $numberSettings$$12$$.groupingSize = 0 < $groupingCount$$ ? $groupingCount$$ : 0) : ($negPrefixPattern$$ = $prefix$$14$$, $negSuffixPattern$$ = $suffix$$, $gotNegative$$ = !0);
      }
      0 == $pattern$$8$$.length && ($posPrefixPattern$$ = $posSuffixPattern$$ = "", $numberSettings$$12$$.minimumIntegerDigits = 0, $numberSettings$$12$$.maximumIntegerDigits = 2147483647, $numberSettings$$12$$.minimumFractionDigits = 0, $numberSettings$$12$$.maximumFractionDigits = 2147483647);
      $numberSettings$$12$$.useExponentialNotation = $useExponentialNotation$$;
      $numberSettings$$12$$.minExponentDigits = $minExponentDigits$$;
      if (!$gotNegative$$ || 0 == $negPrefixPattern$$.localeCompare($posPrefixPattern$$) && 0 == $negSuffixPattern$$.localeCompare($posSuffixPattern$$)) {
        "currency" === $options$$149$$.style && "ar" === $numberSettings$$12$$.lang ? ($negSuffixPattern$$ = $posSuffixPattern$$ + "'\u200f-", $negPrefixPattern$$ = $posPrefixPattern$$) : ($negSuffixPattern$$ = $posSuffixPattern$$, $negPrefixPattern$$ = "'-" + $posPrefixPattern$$);
      }
      $_expandAffixes$$($localeElements$$39$$, $numberSettings$$12$$);
    };
    return{$getInstance$:function() {
      $instance$$13$$ || ($instance$$13$$ = $_init$$1$$());
      return $instance$$13$$;
    }};
  }();
  $oj$$6$$.$DateRestrictionValidator$ = function _DateRestrictionValidator($options$$150$$) {
    this.Init($options$$150$$);
  };
  $goog$exportPath_$$("DateRestrictionValidator", $oj$$6$$.$DateRestrictionValidator$, $oj$$6$$);
  $oj$$6$$.$Object$.$createSubclass$($oj$$6$$.$DateRestrictionValidator$, $oj$$6$$.$Validator$, "oj.DateRestrictionValidator");
  $oj$$6$$.$DateRestrictionValidator$.prototype.Init = function $$oj$$6$$$$DateRestrictionValidator$$$Init$($options$$151$$) {
    $oj$$6$$.$DateRestrictionValidator$.$superclass$.Init.call(this);
    this.$_dayMetaData$ = $options$$151$$.dayMetaData;
    $options$$151$$ && (this.$_customMessage$ = $options$$151$$.message || {});
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateRestrictionValidator.prototype.Init", {Init:$oj$$6$$.$DateRestrictionValidator$.prototype.Init});
  $oj$$6$$.$DateRestrictionValidator$.prototype.$_inDisabledMetaData$ = function $$oj$$6$$$$DateRestrictionValidator$$$$_inDisabledMetaData$$($date$$5_value$$125$$) {
    var $dayMetaData_metaData$$ = this.$_dayMetaData$, $disabledInMetaData$$ = function getMetaData($dayMetaData$$1$$, $position$$1$$, $params$$4$$) {
      if (!$dayMetaData$$1$$ || $position$$1$$ === $params$$4$$.length) {
        return $dayMetaData$$1$$;
      }
      var $nextPos$$ = $position$$1$$ + 1;
      return getMetaData($dayMetaData$$1$$[$params$$4$$[$position$$1$$]], $nextPos$$, $params$$4$$) || getMetaData($dayMetaData$$1$$["*"], $nextPos$$, $params$$4$$);
    };
    if ($dayMetaData_metaData$$) {
      var $fullYear$$ = $date$$5_value$$125$$.getFullYear(), $month$$4$$ = $date$$5_value$$125$$.getMonth() + 1;
      $date$$5_value$$125$$ = $date$$5_value$$125$$.getDate();
      return($dayMetaData_metaData$$ = $disabledInMetaData$$($dayMetaData_metaData$$, 0, [$fullYear$$, $month$$4$$, $date$$5_value$$125$$])) && $dayMetaData_metaData$$.disabled;
    }
    return!1;
  };
  $goog$exportPath_$$("DateRestrictionValidator.prototype._inDisabledMetaData", $oj$$6$$.$DateRestrictionValidator$.prototype.$_inDisabledMetaData$, $oj$$6$$);
  $oj$$6$$.$DateRestrictionValidator$.prototype.validate = function $$oj$$6$$$$DateRestrictionValidator$$$validate$($value$$126$$) {
    var $messageDayMetaData$$, $customMessage_summary$$11$$ = "", $detail$$14_translations$$2$$ = "", $detail$$14_translations$$2$$ = $oj$$6$$.$Translations$, $customMessage_summary$$11$$ = this.$_customMessage$;
    if (this.$_inDisabledMetaData$($value$$126$$)) {
      throw $messageDayMetaData$$ = $customMessage_summary$$11$$.messageDayMetaData, $customMessage_summary$$11$$ = $detail$$14_translations$$2$$.$getTranslatedString$("oj-validator.restriction.date.dayMetaData.summary"), $detail$$14_translations$$2$$ = $messageDayMetaData$$ ? $detail$$14_translations$$2$$.$applyParameters$($messageDayMetaData$$, {value:$value$$126$$}) : $detail$$14_translations$$2$$.$getTranslatedString$("oj-validator.restriction.date.dayMetaData.detail", {value:$value$$126$$}), 
      new $oj$$6$$.$ValidatorError$($customMessage_summary$$11$$, $detail$$14_translations$$2$$);
    }
    return $value$$126$$;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateRestrictionValidator.prototype.validate", {validate:$oj$$6$$.$DateRestrictionValidator$.prototype.validate});
  $oj$$6$$.$RegExpValidator$ = function $$oj$$6$$$$RegExpValidator$$($options$$152$$) {
    this.Init($options$$152$$);
  };
  $goog$exportPath_$$("RegExpValidator", $oj$$6$$.$RegExpValidator$, $oj$$6$$);
  $oj$$6$$.$Object$.$createSubclass$($oj$$6$$.$RegExpValidator$, $oj$$6$$.$Validator$, "oj.RegExpValidator");
  $oj$$6$$.$RegExpValidator$.$_BUNDLE_KEY_DETAIL$ = "oj-validator.regExp.detail";
  $oj$$6$$.$RegExpValidator$.$_BUNDLE_KEY_SUMMARY$ = "oj-validator.regExp.summary";
  $oj$$6$$.$RegExpValidator$.prototype.Init = function $$oj$$6$$$$RegExpValidator$$$Init$($options$$153$$) {
    $oj$$6$$.$RegExpValidator$.$superclass$.Init.call(this);
    this.$_options$ = $options$$153$$;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("RegExpValidator.prototype.Init", {Init:$oj$$6$$.$RegExpValidator$.prototype.Init});
  $oj$$6$$.$RegExpValidator$.prototype.validate = function $$oj$$6$$$$RegExpValidator$$$validate$($params$$5_value$$127$$) {
    var $pattern$$9$$ = this.$_options$ && this.$_options$.pattern || "", $label$$2$$, $localizedSummary_summary$$12$$, $detail$$15_localizedDetail$$;
    $params$$5_value$$127$$ = $params$$5_value$$127$$ ? $params$$5_value$$127$$.toString() : $params$$5_value$$127$$;
    var $matchArr$$;
    $matchArr$$ = $params$$5_value$$127$$.match("^(" + $pattern$$9$$ + ")$");
    if (null === $matchArr$$ || $matchArr$$[0] !== $params$$5_value$$127$$) {
      throw this.$_options$ && ($localizedSummary_summary$$12$$ = this.$_options$.messageSummary || null, $detail$$15_localizedDetail$$ = this.$_options$.messageDetail || null, $label$$2$$ = this.$_options$ && this.$_options$.label || ""), $params$$5_value$$127$$ = {label:$label$$2$$, pattern:$pattern$$9$$, value:$params$$5_value$$127$$}, $localizedSummary_summary$$12$$ = $localizedSummary_summary$$12$$ ? $oj$$6$$.$Translations$.$applyParameters$($localizedSummary_summary$$12$$, $params$$5_value$$127$$) : 
      $oj$$6$$.$Translations$.$getTranslatedString$(this.$_getSummaryKey$(), $params$$5_value$$127$$), $detail$$15_localizedDetail$$ = $detail$$15_localizedDetail$$ ? $oj$$6$$.$Translations$.$applyParameters$($detail$$15_localizedDetail$$, $params$$5_value$$127$$) : $oj$$6$$.$Translations$.$getTranslatedString$(this.$_getDetailKey$(), $params$$5_value$$127$$), new $oj$$6$$.$ValidatorError$($localizedSummary_summary$$12$$, $detail$$15_localizedDetail$$);
    }
    return!0;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("RegExpValidator.prototype.validate", {validate:$oj$$6$$.$RegExpValidator$.prototype.validate});
  $oj$$6$$.$RegExpValidator$.prototype.$getHint$ = function $$oj$$6$$$$RegExpValidator$$$$getHint$$() {
    var $hint$$3$$ = null, $params$$6$$ = {};
    this.$_options$ && this.$_options$.hint && ($params$$6$$ = {pattern:this.$_options$.pattern}, $hint$$3$$ = $oj$$6$$.$Translations$.$applyParameters$(this.$_options$.hint, $params$$6$$));
    return $hint$$3$$;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("RegExpValidator.prototype.getHint", {$getHint$:$oj$$6$$.$RegExpValidator$.prototype.$getHint$});
  $oj$$6$$.$RegExpValidator$.prototype.$_getSummaryKey$ = function $$oj$$6$$$$RegExpValidator$$$$_getSummaryKey$$() {
    return $oj$$6$$.$RegExpValidator$.$_BUNDLE_KEY_SUMMARY$;
  };
  $oj$$6$$.$RegExpValidator$.prototype.$_getDetailKey$ = function $$oj$$6$$$$RegExpValidator$$$$_getDetailKey$$() {
    return $oj$$6$$.$RegExpValidator$.$_BUNDLE_KEY_DETAIL$;
  };
  $oj$$6$$.$IntlDateTimeConverter$ = function $$oj$$6$$$$IntlDateTimeConverter$$($options$$154$$) {
    this.Init($options$$154$$);
  };
  $goog$exportPath_$$("IntlDateTimeConverter", $oj$$6$$.$IntlDateTimeConverter$, $oj$$6$$);
  $oj$$6$$.$Object$.$createSubclass$($oj$$6$$.$IntlDateTimeConverter$, $oj$$6$$.$DateTimeConverter$, "oj.IntlDateTimeConverter");
  $oj$$6$$.$IntlDateTimeConverter$.$_DEFAULT_DATE$ = new Date(1998, 10, 29, 15, 45, 31);
  $oj$$6$$.$IntlDateTimeConverter$.prototype.Init = function $$oj$$6$$$$IntlDateTimeConverter$$$Init$($options$$155$$) {
    $oj$$6$$.$IntlDateTimeConverter$.$superclass$.Init.call(this, $options$$155$$);
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlDateTimeConverter.prototype.Init", {Init:$oj$$6$$.$IntlDateTimeConverter$.prototype.Init});
  $oj$$6$$.$IntlDateTimeConverter$.prototype.$_getWrapped$ = function $$oj$$6$$$$IntlDateTimeConverter$$$$_getWrapped$$() {
    this.$_wrapped$ || (this.$_wrapped$ = $OraDateTimeConverter$$.$getInstance$());
    return this.$_wrapped$;
  };
  $oj$$6$$.$IntlDateTimeConverter$.prototype.format = function $$oj$$6$$$$IntlDateTimeConverter$$$format$($converterError$$4_value$$128$$) {
    var $localeElements$$40$$ = $oj$$6$$.$LocaleData$.$__getBundle$(), $locale$$16$$ = $oj$$6$$.$Config$.$getLocale$(), $resolvedOptions$$2$$ = this.resolvedOptions();
    if (null == $converterError$$4_value$$128$$ || "string" === typeof $converterError$$4_value$$128$$ && 0 === $oj$$6$$.$StringUtils$.trim("" + $converterError$$4_value$$128$$).length) {
      return "";
    }
    try {
      return this.$_getWrapped$().format($converterError$$4_value$$128$$, $localeElements$$40$$, $resolvedOptions$$2$$, $locale$$16$$);
    } catch ($e$$37$$) {
      throw $converterError$$4_value$$128$$ = this.$_processConverterError$($e$$37$$, $converterError$$4_value$$128$$), $converterError$$4_value$$128$$;
    }
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlDateTimeConverter.prototype.format", {format:$oj$$6$$.$IntlDateTimeConverter$.prototype.format});
  $oj$$6$$.$IntlDateTimeConverter$.prototype.$formatRelative$ = function $$oj$$6$$$$IntlDateTimeConverter$$$$formatRelative$$($value$$129$$, $relativeOptions$$) {
    var $converterError$$5_localeElements$$41$$ = $oj$$6$$.$LocaleData$.$__getBundle$(), $locale$$17$$ = $oj$$6$$.$Config$.$getLocale$();
    try {
      return this.$_getWrapped$().$formatRelative$($value$$129$$, $converterError$$5_localeElements$$41$$, $relativeOptions$$, $locale$$17$$);
    } catch ($e$$38$$) {
      throw $converterError$$5_localeElements$$41$$ = this.$_processConverterError$($e$$38$$, $value$$129$$), $converterError$$5_localeElements$$41$$;
    }
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlDateTimeConverter.prototype.formatRelative", {$formatRelative$:$oj$$6$$.$IntlDateTimeConverter$.prototype.$formatRelative$});
  $oj$$6$$.$IntlDateTimeConverter$.prototype.$getHint$ = function $$oj$$6$$$$IntlDateTimeConverter$$$$getHint$$() {
    var $patternFromOptions$$1$$ = this.resolvedOptions().patternFromOptions;
    return $patternFromOptions$$1$$ ? $patternFromOptions$$1$$ : "";
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlDateTimeConverter.prototype.getHint", {$getHint$:$oj$$6$$.$IntlDateTimeConverter$.prototype.$getHint$});
  $oj$$6$$.$IntlDateTimeConverter$.prototype.$_getHintValue$ = function $$oj$$6$$$$IntlDateTimeConverter$$$$_getHintValue$$() {
    var $value$$130$$ = "";
    try {
      $value$$130$$ = this.format($oj$$6$$.$IntlDateTimeConverter$.$_DEFAULT_DATE$);
    } catch ($e$$39$$) {
      $e$$39$$ instanceof $oj$$6$$.$ConverterError$ && ($value$$130$$ = "");
    } finally {
      return $value$$130$$;
    }
  };
  $oj$$6$$.$IntlDateTimeConverter$.prototype.$getOptions$ = function $$oj$$6$$$$IntlDateTimeConverter$$$$getOptions$$() {
    return $oj$$6$$.$IntlDateTimeConverter$.$superclass$.$getOptions$.call(this);
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlDateTimeConverter.prototype.getOptions", {$getOptions$:$oj$$6$$.$IntlDateTimeConverter$.prototype.$getOptions$});
  $oj$$6$$.$IntlDateTimeConverter$.prototype.resolvedOptions = function $$oj$$6$$$$IntlDateTimeConverter$$$resolvedOptions$() {
    var $converterError$$6_localeElements$$42$$, $locale$$18$$ = $oj$$6$$.$Config$.$getLocale$(), $options$$156$$ = this.$getOptions$();
    if ($locale$$18$$ !== this.$_locale$ || !this.$_resolvedOptions$) {
      $converterError$$6_localeElements$$42$$ = $oj$$6$$.$LocaleData$.$__getBundle$();
      try {
        this.$_resolvedOptions$ = this.$_getWrapped$().resolvedOptions($converterError$$6_localeElements$$42$$, $options$$156$$, $locale$$18$$), this.$_locale$ = $locale$$18$$;
      } catch ($e$$40$$) {
        throw $converterError$$6_localeElements$$42$$ = this.$_processConverterError$($e$$40$$), $converterError$$6_localeElements$$42$$;
      }
    }
    return this.$_resolvedOptions$;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlDateTimeConverter.prototype.resolvedOptions", {resolvedOptions:$oj$$6$$.$IntlDateTimeConverter$.prototype.resolvedOptions});
  $oj$$6$$.$IntlDateTimeConverter$.prototype.$isHourInDaySet$ = function $$oj$$6$$$$IntlDateTimeConverter$$$$isHourInDaySet$$() {
    var $ro$$ = this.resolvedOptions(), $hour12$$3$$ = $ro$$.hour12;
    return $ro$$.hour && !$hour12$$3$$ ? !0 : !1;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlDateTimeConverter.prototype.isHourInDaySet", {$isHourInDaySet$:$oj$$6$$.$IntlDateTimeConverter$.prototype.$isHourInDaySet$});
  $oj$$6$$.$IntlDateTimeConverter$.prototype.$isHourInAMPMSet$ = function $$oj$$6$$$$IntlDateTimeConverter$$$$isHourInAMPMSet$$() {
    var $ro$$1$$ = this.resolvedOptions(), $hour12$$4$$ = $ro$$1$$.hour12;
    return $ro$$1$$.hour && $hour12$$4$$ ? !0 : !1;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlDateTimeConverter.prototype.isHourInAMPMSet", {$isHourInAMPMSet$:$oj$$6$$.$IntlDateTimeConverter$.prototype.$isHourInAMPMSet$});
  $oj$$6$$.$IntlDateTimeConverter$.prototype.$isMinuteSet$ = function $$oj$$6$$$$IntlDateTimeConverter$$$$isMinuteSet$$() {
    return this.$_isOptionSet$("minute");
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlDateTimeConverter.prototype.isMinuteSet", {$isMinuteSet$:$oj$$6$$.$IntlDateTimeConverter$.prototype.$isMinuteSet$});
  $oj$$6$$.$IntlDateTimeConverter$.prototype.$isSecondSet$ = function $$oj$$6$$$$IntlDateTimeConverter$$$$isSecondSet$$() {
    return this.$_isOptionSet$("second");
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlDateTimeConverter.prototype.isSecondSet", {$isSecondSet$:$oj$$6$$.$IntlDateTimeConverter$.prototype.$isSecondSet$});
  $oj$$6$$.$IntlDateTimeConverter$.prototype.$isMilliSecondSet$ = function $$oj$$6$$$$IntlDateTimeConverter$$$$isMilliSecondSet$$() {
    return this.$_isOptionSet$("millisecond");
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlDateTimeConverter.prototype.isMilliSecondSet", {$isMilliSecondSet$:$oj$$6$$.$IntlDateTimeConverter$.prototype.$isMilliSecondSet$});
  $oj$$6$$.$IntlDateTimeConverter$.prototype.$isYearSet$ = function $$oj$$6$$$$IntlDateTimeConverter$$$$isYearSet$$() {
    return this.$_isOptionSet$("year");
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlDateTimeConverter.prototype.isYearSet", {$isYearSet$:$oj$$6$$.$IntlDateTimeConverter$.prototype.$isYearSet$});
  $oj$$6$$.$IntlDateTimeConverter$.prototype.$isMonthSet$ = function $$oj$$6$$$$IntlDateTimeConverter$$$$isMonthSet$$() {
    return this.$_isOptionSet$("month");
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlDateTimeConverter.prototype.isMonthSet", {$isMonthSet$:$oj$$6$$.$IntlDateTimeConverter$.prototype.$isMonthSet$});
  $oj$$6$$.$IntlDateTimeConverter$.prototype.$isDaySet$ = function $$oj$$6$$$$IntlDateTimeConverter$$$$isDaySet$$() {
    return this.$_isOptionSet$("day");
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlDateTimeConverter.prototype.isDaySet", {$isDaySet$:$oj$$6$$.$IntlDateTimeConverter$.prototype.$isDaySet$});
  $oj$$6$$.$IntlDateTimeConverter$.prototype.$isDayNameSet$ = function $$oj$$6$$$$IntlDateTimeConverter$$$$isDayNameSet$$() {
    return this.$_isOptionSet$("weekday");
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlDateTimeConverter.prototype.isDayNameSet", {$isDayNameSet$:$oj$$6$$.$IntlDateTimeConverter$.prototype.$isDayNameSet$});
  $oj$$6$$.$IntlDateTimeConverter$.prototype.parse = function $$oj$$6$$$$IntlDateTimeConverter$$$parse$($converterError$$7_value$$131$$) {
    var $result$$13$$, $parsed$$;
    if (null == $converterError$$7_value$$131$$ || "" === $converterError$$7_value$$131$$) {
      return null;
    }
    var $localeElements$$43$$ = $oj$$6$$.$LocaleData$.$__getBundle$(), $locale$$19$$ = $oj$$6$$.$Config$.$getLocale$(), $resolvedOptions$$4$$ = this.resolvedOptions();
    try {
      return $result$$13$$ = this.$_getWrapped$().parse($converterError$$7_value$$131$$, $localeElements$$43$$, $resolvedOptions$$4$$, $locale$$19$$), $parsed$$ = $result$$13$$.value, "object" === typeof $result$$13$$ && $parsed$$ && $result$$13$$.warning && $oj$$6$$.$Logger$.warn("The value " + $converterError$$7_value$$131$$ + " was leniently parsed to represent a date " + $parsed$$.toString ? $parsed$$.toString() : $parsed$$), $parsed$$;
    } catch ($e$$41$$) {
      throw $converterError$$7_value$$131$$ = this.$_processConverterError$($e$$41$$, $converterError$$7_value$$131$$), $converterError$$7_value$$131$$;
    }
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlDateTimeConverter.prototype.parse", {parse:$oj$$6$$.$IntlDateTimeConverter$.prototype.parse});
  $oj$$6$$.$IntlDateTimeConverter$.prototype.$_processConverterError$ = function $$oj$$6$$$$IntlDateTimeConverter$$$$_processConverterError$$($e$$42$$, $value$$132$$) {
    var $errorInfo$$9_parameterMap$$1$$ = $e$$42$$.errorInfo, $errorCode$$1_summary$$13$$, $converterError$$8_detail$$16$$, $propName$$2$$, $resourceKey$$1$$;
    if ($errorInfo$$9_parameterMap$$1$$) {
      if ($errorCode$$1_summary$$13$$ = $errorInfo$$9_parameterMap$$1$$.errorCode, $errorInfo$$9_parameterMap$$1$$ = $errorInfo$$9_parameterMap$$1$$.parameterMap, $oj$$6$$.$Assert$.$assertObject$($errorInfo$$9_parameterMap$$1$$), $propName$$2$$ = $errorInfo$$9_parameterMap$$1$$.propertyName, $e$$42$$ instanceof TypeError) {
        if ("optionTypesMismatch" === $errorCode$$1_summary$$13$$ || "optionTypeInvalid" === $errorCode$$1_summary$$13$$) {
          $converterError$$8_detail$$16$$ = $oj$$6$$.$IntlConverterUtils$.$__getConverterOptionError$($errorCode$$1_summary$$13$$, $errorInfo$$9_parameterMap$$1$$);
        }
      } else {
        $e$$42$$ instanceof RangeError ? "optionOutOfRange" === $errorCode$$1_summary$$13$$ ? $converterError$$8_detail$$16$$ = $oj$$6$$.$IntlConverterUtils$.$__getConverterOptionError$($errorCode$$1_summary$$13$$, $errorInfo$$9_parameterMap$$1$$) : "datetimeOutOfRange" === $errorCode$$1_summary$$13$$ && ($errorCode$$1_summary$$13$$ = $oj$$6$$.$Translations$.$getTranslatedString$("oj-converter.datetime.datetimeOutOfRange.summary", {propertyName:$propName$$2$$, value:$errorInfo$$9_parameterMap$$1$$.value}), 
        $converterError$$8_detail$$16$$ = $oj$$6$$.$Translations$.$getTranslatedString$("oj-converter.datetime.datetimeOutOfRange.detail", {minValue:$errorInfo$$9_parameterMap$$1$$.minValue, maxValue:$errorInfo$$9_parameterMap$$1$$.maxValue}), $converterError$$8_detail$$16$$ = new $oj$$6$$.$ConverterError$($errorCode$$1_summary$$13$$, $converterError$$8_detail$$16$$)) : $e$$42$$ instanceof SyntaxError ? "optionValueInvalid" === $errorCode$$1_summary$$13$$ && ($converterError$$8_detail$$16$$ = $oj$$6$$.$IntlConverterUtils$.$__getConverterOptionError$($errorCode$$1_summary$$13$$, 
        $errorInfo$$9_parameterMap$$1$$)) : $e$$42$$ instanceof Error && ("dateFormatMismatch" === $errorCode$$1_summary$$13$$ ? $resourceKey$$1$$ = "oj-converter.datetime.dateFormatMismatch.summary" : "timeFormatMismatch" === $errorCode$$1_summary$$13$$ ? $resourceKey$$1$$ = "oj-converter.datetime.timeFormatMismatch.summary" : "datetimeFormatMismatch" === $errorCode$$1_summary$$13$$ ? $resourceKey$$1$$ = "oj-converter.datetime.datetimeFormatMismatch.summary" : "dateToWeekdayMismatch" === $errorCode$$1_summary$$13$$ && 
        ($errorCode$$1_summary$$13$$ = $oj$$6$$.$Translations$.$getTranslatedString$("oj-converter.datetime.dateToWeekdayMismatch.summary", {date:$errorInfo$$9_parameterMap$$1$$.date, weekday:$errorInfo$$9_parameterMap$$1$$.weekday}), $converterError$$8_detail$$16$$ = $oj$$6$$.$Translations$.$getTranslatedString$("oj-converter.datetime.dateToWeekdayMismatch.detail"), $converterError$$8_detail$$16$$ = new $oj$$6$$.$ConverterError$($errorCode$$1_summary$$13$$, $converterError$$8_detail$$16$$)), $resourceKey$$1$$ && 
        ($errorCode$$1_summary$$13$$ = $oj$$6$$.$Translations$.$getTranslatedString$($resourceKey$$1$$, {value:$value$$132$$ || $errorInfo$$9_parameterMap$$1$$.value, format:$errorInfo$$9_parameterMap$$1$$.format}), $converterError$$8_detail$$16$$ = $oj$$6$$.$Translations$.$getTranslatedString$("oj-converter.hint.detail", {exampleValue:this.$_getHintValue$()}), $converterError$$8_detail$$16$$ = new $oj$$6$$.$ConverterError$($errorCode$$1_summary$$13$$, $converterError$$8_detail$$16$$)));
      }
    }
    $converterError$$8_detail$$16$$ || ($converterError$$8_detail$$16$$ = $errorCode$$1_summary$$13$$ = $e$$42$$.message, $converterError$$8_detail$$16$$ = new $oj$$6$$.$ConverterError$($errorCode$$1_summary$$13$$, $converterError$$8_detail$$16$$));
    return $converterError$$8_detail$$16$$;
  };
  $oj$$6$$.$IntlDateTimeConverter$.prototype.$_isOptionSet$ = function $$oj$$6$$$$IntlDateTimeConverter$$$$_isOptionSet$$($optionName$$1$$) {
    return this.resolvedOptions()[$optionName$$1$$] ? !0 : !1;
  };
  var $OraI18nUtils$$ = {$numeringSystems$:{latn:"0123456789", arab:"\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669", thai:"\u0e50\u0e51\u0e52\u0e53\u0e54\u0e55\u0e56\u0e57\u0e58\u0e59"}, $BCP47RE$:/^(?:(en-GB-oed|i-(?:ami|bnn|default|enochian|hak|klingon|lux|mingo|navajo|pwn|tao|tay|tsu)|sgn-(?:BE-FR|BE-NL|CH-DE))|(art-lojban|cel-gaulish|no-(?:bok|nyn)|zh-(?:guoyu|hakka|min|min-nan|xiang)))$|^(x(?:-[0-9a-z]{1,8})+)$|^(?:((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|[0-9]{3}))?((?:-(?:[a-z0-9]{5,8}|[0-9][a-z0-9]{3}))*)?((?:-[0-9a-wy-z](?:-[a-z0-9]{2,8}){1,})*)?(-x(?:-[0-9a-z]{1,8})+)?)$/i, 
  $regexTrim$:/^\s+|\s+$|\u200f|\u200e/g, $regexTrimNumber$:/\s+|\u200f|\u200e/g, $zeros$:["0", "00", "000"], trim:function($value$$133$$) {
    return($value$$133$$ + "").replace($OraI18nUtils$$.$regexTrim$, "");
  }, $trimNumber$:function($value$$134$$) {
    return($value$$134$$ + "").replace($OraI18nUtils$$.$regexTrimNumber$, "");
  }, $startsWith$:function($value$$135$$, $pattern$$10$$) {
    return 0 === $value$$135$$.indexOf($pattern$$10$$);
  }, $toUpper$:function($value$$136$$) {
    return $value$$136$$.split("\u00a0").join(" ").toUpperCase();
  }, $padZeros$:function($num$$8$$, $c$$21$$) {
    var $r_s$$5$$;
    $r_s$$5$$ = $num$$8$$ + "";
    return 1 < $c$$21$$ && $r_s$$5$$.length < $c$$21$$ ? ($r_s$$5$$ = $OraI18nUtils$$.$zeros$[$c$$21$$ - 2] + $r_s$$5$$, $r_s$$5$$.substr($r_s$$5$$.length - $c$$21$$, $c$$21$$)) : $r_s$$5$$;
  }, $getNumberingSystemKey$:function($localeElements$$44$$, $locale$$20$$) {
    if (void 0 === $locale$$20$$) {
      return "latn";
    }
    var $numberingSystemKey$$7$$ = $OraI18nUtils$$.$getLanguageExtension$($locale$$20$$, "nu") || "";
    void 0 === $localeElements$$44$$.numbers["symbols-numberSystem-" + $numberingSystemKey$$7$$] && ($numberingSystemKey$$7$$ = "latn");
    return $numberingSystemKey$$7$$;
  }, $parseBCP47$:function($match$$12_tag$$1$$) {
    $match$$12_tag$$1$$ = $OraI18nUtils$$.$BCP47RE$.exec($match$$12_tag$$1$$);
    if (!$match$$12_tag$$1$$) {
      return null;
    }
    var $match4$$ = $match$$12_tag$$1$$[4], $match4$$ = $match4$$ ? $match4$$.split("-") : null, $language$$ = null;
    $match4$$ && ($language$$ = $match4$$.shift());
    var $match7$$ = $match$$12_tag$$1$$[7];
    ($match7$$ = $match7$$ ? $match7$$.split("-") : null) && $match7$$.shift();
    var $match9$$ = $match$$12_tag$$1$$[9];
    if ($match9$$ = $match9$$ ? $match9$$.split("-") : null) {
      $match9$$.shift(), $match9$$.shift();
    }
    var $match3$$ = $match$$12_tag$$1$$[3];
    ($match3$$ = $match3$$ ? $match3$$.split("-") : null) && $match3$$.shift();
    return{language:{language:$language$$, $extlang$:$match4$$ || []}, $script$:$match$$12_tag$$1$$[5] || null, region:$match$$12_tag$$1$$[6] || null, variant:$match7$$ || null, $extension$:$OraI18nUtils$$.$parseExtension$($match$$12_tag$$1$$[8]), $privateuse$:$match9$$ || $match3$$ || [], $grandfathered$:{$irregular$:$match$$12_tag$$1$$[1] || null, $regular$:$match$$12_tag$$1$$[2] || null}};
  }, $parseExtension$:function($tag$$2$$) {
    if (!$tag$$2$$) {
      return[];
    }
    for (var $extensions$$ = [], $e$$43$$, $c$$22$$, $newExtension$$ = !1, $singleton$$ = !1, $extension$$ = "", $parsingExtension$$ = !1, $i$$96$$ = 0, $len$$7$$ = $tag$$2$$.length;$i$$96$$ < $len$$7$$;$i$$96$$++) {
      $c$$22$$ = $tag$$2$$[$i$$96$$], "-" !== $c$$22$$ || $newExtension$$ ? $newExtension$$ && !$singleton$$ ? ($singleton$$ = !0, $e$$43$$.singleton = $c$$22$$) : "-" === $c$$22$$ ? $parsingExtension$$ ? 1 === $extension$$.length ? ($singleton$$ = $parsingExtension$$ = !1, $extensions$$.push($e$$43$$), $e$$43$$ = {singleton:null, extension:[]}) : ($e$$43$$.extension.push($extension$$), $extension$$ = "") : ($extension$$ = "", $parsingExtension$$ = !0) : $extension$$ += $c$$22$$ : ($newExtension$$ = 
      !0, $e$$43$$ = {singleton:null, extension:[]});
    }
    $e$$43$$.extension.push($extension$$);
    $extensions$$.push($e$$43$$);
    return $extensions$$;
  }, $getLanguageExtension$:function($locale$$21$$, $token$$6$$) {
    var $ext$$1_parsedLang$$ = $OraI18nUtils$$.$parseBCP47$($locale$$21$$ || "en-US");
    if (null === $ext$$1_parsedLang$$ || void 0 === $ext$$1_parsedLang$$) {
      return null;
    }
    var $ext$$1_parsedLang$$ = $ext$$1_parsedLang$$.extension, $localeExtension$$, $i$$97$$;
    for ($i$$97$$ in $ext$$1_parsedLang$$) {
      if ("u" === $ext$$1_parsedLang$$[$i$$97$$].singleton) {
        for (var $j$$17$$ in $ext$$1_parsedLang$$[$i$$97$$].extension) {
          if ($ext$$1_parsedLang$$[$i$$97$$].extension[$j$$17$$] === $token$$6$$) {
            $j$$17$$++;
            $localeExtension$$ = $ext$$1_parsedLang$$[$i$$97$$].extension[$j$$17$$];
            break;
          }
        }
        break;
      }
    }
    return $localeExtension$$;
  }, $getLocaleElementsMainNode$:function($bundle$$5_mainNode$$14$$) {
    $bundle$$5_mainNode$$14$$ = $bundle$$5_mainNode$$14$$.main;
    var $subnode$$, $n$$15$$;
    for ($n$$15$$ in $bundle$$5_mainNode$$14$$) {
      $subnode$$ = $n$$15$$;
      break;
    }
    return $bundle$$5_mainNode$$14$$[$subnode$$];
  }, $getLocaleElementsMainNodeKey$:function($bundle$$6_mainNode$$15$$) {
    $bundle$$6_mainNode$$15$$ = $bundle$$6_mainNode$$15$$.main;
    var $subnode$$1$$, $n$$16$$;
    for ($n$$16$$ in $bundle$$6_mainNode$$15$$) {
      $subnode$$1$$ = $n$$16$$;
      break;
    }
    return $subnode$$1$$;
  }, $getGetOption$:function($options$$157$$, $getOptionCaller$$) {
    if (void 0 === $options$$157$$) {
      throw Error("Internal " + $getOptionCaller$$ + " error. Default options missing.");
    }
    return function getOption$$10($property$$15$$, $expectedValues_type$$74$$, $rangeError$$2_values$$9$$, $defaultValue$$2_i$$98_value$$137$$) {
      if (void 0 !== $options$$157$$[$property$$15$$]) {
        $defaultValue$$2_i$$98_value$$137$$ = $options$$157$$[$property$$15$$];
        switch($expectedValues_type$$74$$) {
          case "boolean":
            $defaultValue$$2_i$$98_value$$137$$ = Boolean($defaultValue$$2_i$$98_value$$137$$);
            break;
          case "string":
            $defaultValue$$2_i$$98_value$$137$$ = String($defaultValue$$2_i$$98_value$$137$$);
            break;
          case "number":
            $defaultValue$$2_i$$98_value$$137$$ = Number($defaultValue$$2_i$$98_value$$137$$);
            break;
          default:
            throw Error("Internal error. Wrong value type.");;
        }
        if (void 0 !== $rangeError$$2_values$$9$$ && -1 === $rangeError$$2_values$$9$$.indexOf($defaultValue$$2_i$$98_value$$137$$)) {
          $expectedValues_type$$74$$ = [];
          for ($defaultValue$$2_i$$98_value$$137$$ = 0;$defaultValue$$2_i$$98_value$$137$$ < $rangeError$$2_values$$9$$.length;$defaultValue$$2_i$$98_value$$137$$++) {
            $expectedValues_type$$74$$.push($rangeError$$2_values$$9$$[$defaultValue$$2_i$$98_value$$137$$]);
          }
          $rangeError$$2_values$$9$$ = new RangeError("The value '" + $options$$157$$[$property$$15$$] + "' is out of range for '" + $getOptionCaller$$ + "' options property '" + $property$$15$$ + "'. Valid values: " + $expectedValues_type$$74$$);
          $rangeError$$2_values$$9$$.errorInfo = {errorCode:"optionOutOfRange", parameterMap:{propertyName:$property$$15$$, propertyValue:$options$$157$$[$property$$15$$], propertyValueValid:$expectedValues_type$$74$$, caller:$getOptionCaller$$}};
          throw $rangeError$$2_values$$9$$;
        }
      }
      return $defaultValue$$2_i$$98_value$$137$$;
    };
  }};
  $oj$$6$$.$DateTimeRangeValidator$ = function _DateTimeRangeValidator($options$$158$$) {
    this.Init($options$$158$$);
  };
  $goog$exportPath_$$("DateTimeRangeValidator", $oj$$6$$.$DateTimeRangeValidator$, $oj$$6$$);
  $oj$$6$$.$Object$.$createSubclass$($oj$$6$$.$DateTimeRangeValidator$, $oj$$6$$.$Validator$, "oj.DateTimeRangeValidator");
  $oj$$6$$.$DateTimeRangeValidator$.prototype.Init = function $$oj$$6$$$$DateTimeRangeValidator$$$Init$($options$$159$$) {
    $oj$$6$$.$DateTimeRangeValidator$.$superclass$.Init.call(this);
    this.$_min$ = $options$$159$$.min || null;
    this.$_max$ = $options$$159$$.max || null;
    this.$_converter$ = $oj$$6$$.$IntlConverterUtils$.getConverterInstance($options$$159$$.converter);
    $options$$159$$ && (this.$_hint$ = $options$$159$$.hint || {}, this.$_customMessage$ = $options$$159$$.message || {});
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateTimeRangeValidator.prototype.Init", {Init:$oj$$6$$.$DateTimeRangeValidator$.prototype.Init});
  $oj$$6$$.$DateTimeRangeValidator$.prototype.validate = function $$oj$$6$$$$DateTimeRangeValidator$$$validate$($value$$138$$) {
    var $messageNotInRange_min$$1$$, $maxStr_messageMinimum$$, $messageMaximum_minStr$$;
    $messageNotInRange_min$$1$$ = this.$_min$;
    var $max$$1$$ = this.$_max$, $customMessage$$1_summary$$14$$ = "", $detail$$17_translations$$3$$ = "", $detail$$17_translations$$3$$ = $oj$$6$$.$Translations$, $customMessage$$1_summary$$14$$ = this.$_customMessage$;
    $messageMaximum_minStr$$ = $messageNotInRange_min$$1$$ && this.$_converter$ ? this.$_converter$.format($messageNotInRange_min$$1$$) : $messageNotInRange_min$$1$$;
    $maxStr_messageMinimum$$ = $max$$1$$ && this.$_converter$ ? this.$_converter$.format($max$$1$$) : $max$$1$$;
    if (null === $value$$138$$) {
      return $value$$138$$;
    }
    if (null !== $messageNotInRange_min$$1$$ && null !== $max$$1$$) {
      if ($value$$138$$ >= $messageNotInRange_min$$1$$ && $value$$138$$ <= $max$$1$$ || $messageNotInRange_min$$1$$ > $max$$1$$) {
        return $value$$138$$;
      }
      $messageNotInRange_min$$1$$ = $customMessage$$1_summary$$14$$.messageNotInRange;
      $customMessage$$1_summary$$14$$ = $detail$$17_translations$$3$$.$getTranslatedString$("oj-validator.range.datetime.range.summary");
      $detail$$17_translations$$3$$ = $messageNotInRange_min$$1$$ ? $detail$$17_translations$$3$$.$applyParameters$($messageNotInRange_min$$1$$, {value:$value$$138$$, min:$messageMaximum_minStr$$, max:$maxStr_messageMinimum$$}) : $detail$$17_translations$$3$$.$getTranslatedString$("oj-validator.range.datetime.range.detail", {min:$messageMaximum_minStr$$, max:$maxStr_messageMinimum$$});
    } else {
      if (null !== $messageNotInRange_min$$1$$) {
        if ($value$$138$$ >= $messageNotInRange_min$$1$$) {
          return $value$$138$$;
        }
        $maxStr_messageMinimum$$ = $customMessage$$1_summary$$14$$.messageMinimum;
        $customMessage$$1_summary$$14$$ = $detail$$17_translations$$3$$.$getTranslatedString$("oj-validator.range.datetime.min.summary");
        $detail$$17_translations$$3$$ = $maxStr_messageMinimum$$ ? $detail$$17_translations$$3$$.$applyParameters$($maxStr_messageMinimum$$, {value:$value$$138$$, min:$messageMaximum_minStr$$}) : $detail$$17_translations$$3$$.$getTranslatedString$("oj-validator.range.datetime.min.detail", {min:$messageMaximum_minStr$$});
      } else {
        if (null === $max$$1$$ || $value$$138$$ <= $max$$1$$) {
          return $value$$138$$;
        }
        $messageMaximum_minStr$$ = $customMessage$$1_summary$$14$$.messageMaximum;
        $customMessage$$1_summary$$14$$ = $detail$$17_translations$$3$$.$getTranslatedString$("oj-validator.range.datetime.max.summary");
        $detail$$17_translations$$3$$ = $messageMaximum_minStr$$ ? $detail$$17_translations$$3$$.$applyParameters$($messageMaximum_minStr$$, {value:$value$$138$$, max:$maxStr_messageMinimum$$}) : $detail$$17_translations$$3$$.$getTranslatedString$("oj-validator.range.datetime.max.detail", {max:$maxStr_messageMinimum$$});
      }
    }
    throw new $oj$$6$$.$ValidatorError$($customMessage$$1_summary$$14$$, $detail$$17_translations$$3$$);
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateTimeRangeValidator.prototype.validate", {validate:$oj$$6$$.$DateTimeRangeValidator$.prototype.validate});
  $oj$$6$$.$DateTimeRangeValidator$.prototype.$getHint$ = function $$oj$$6$$$$DateTimeRangeValidator$$$$getHint$$() {
    var $hint$$4$$ = null, $hintMaximum_hints$$4$$ = this.$_hint$, $hintInRange$$ = $hintMaximum_hints$$4$$.hintInRange, $hintMinimum$$ = $hintMaximum_hints$$4$$.hintMinimum, $hintMaximum_hints$$4$$ = $hintMaximum_hints$$4$$.hintMaximum, $min$$2$$ = this.$_min$, $max$$2$$ = this.$_max$, $minStr$$1$$ = $min$$2$$ && this.$_converter$ ? this.$_converter$.format($min$$2$$) : $min$$2$$, $maxStr$$1$$ = $max$$2$$ && this.$_converter$ ? this.$_converter$.format($max$$2$$) : $max$$2$$, $translations$$4$$ = 
    $oj$$6$$.$Translations$;
    null !== $min$$2$$ && null !== $max$$2$$ ? $hint$$4$$ = $hintInRange$$ ? $translations$$4$$.$applyParameters$($hintInRange$$, {min:$minStr$$1$$, max:$maxStr$$1$$}) : $translations$$4$$.$getTranslatedString$("oj-validator.range.datetime.range.hint", {min:$minStr$$1$$, max:$maxStr$$1$$}) : null !== $min$$2$$ ? $hint$$4$$ = $hintMinimum$$ ? $translations$$4$$.$applyParameters$($hintMinimum$$, {min:$min$$2$$}) : $translations$$4$$.$getTranslatedString$("oj-validator.range.datetime.min.hint", {min:$minStr$$1$$}) : 
    null !== $max$$2$$ && ($hint$$4$$ = $hintMaximum_hints$$4$$ ? $translations$$4$$.$applyParameters$($hintMaximum_hints$$4$$, {max:$max$$2$$}) : $translations$$4$$.$getTranslatedString$("oj-validator.range.datetime.max.hint", {max:$maxStr$$1$$}));
    return $hint$$4$$;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateTimeRangeValidator.prototype.getHint", {$getHint$:$oj$$6$$.$DateTimeRangeValidator$.prototype.$getHint$});
  $oj$$6$$.$RequiredValidator$ = function $$oj$$6$$$$RequiredValidator$$($options$$160$$) {
    this.Init($options$$160$$);
  };
  $goog$exportPath_$$("RequiredValidator", $oj$$6$$.$RequiredValidator$, $oj$$6$$);
  $oj$$6$$.$Object$.$createSubclass$($oj$$6$$.$RequiredValidator$, $oj$$6$$.$Validator$, "oj.RequiredValidator");
  $oj$$6$$.$RequiredValidator$.$_BUNDLE_KEY_DETAIL$ = "oj-validator.required.detail";
  $oj$$6$$.$RequiredValidator$.$_BUNDLE_KEY_SUMMARY$ = "oj-validator.required.summary";
  $oj$$6$$.$RequiredValidator$.prototype.Init = function $$oj$$6$$$$RequiredValidator$$$Init$($options$$161$$) {
    $oj$$6$$.$RequiredValidator$.$superclass$.Init.call(this);
    this.$_options$ = $options$$161$$;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("RequiredValidator.prototype.Init", {Init:$oj$$6$$.$RequiredValidator$.prototype.Init});
  $oj$$6$$.$RequiredValidator$.prototype.validate = function $$oj$$6$$$$RequiredValidator$$$validate$($localizedSummary$$1_value$$139$$) {
    var $detail$$18_localizedDetail$$1$$, $summary$$15$$, $label$$3_params$$7$$ = {}, $label$$3_params$$7$$ = "";
    if ("number" === typeof $localizedSummary$$1_value$$139$$ && 0 === $localizedSummary$$1_value$$139$$ || $localizedSummary$$1_value$$139$$ && 0 !== $localizedSummary$$1_value$$139$$.length) {
      return!0;
    }
    this.$_options$ && ($detail$$18_localizedDetail$$1$$ = this.$_options$.messageDetail || this.$_options$.message || null, $summary$$15$$ = this.$_options$.messageSummary || null, $label$$3_params$$7$$ = this.$_options$.label || "");
    $label$$3_params$$7$$ = {label:$label$$3_params$$7$$};
    $localizedSummary$$1_value$$139$$ = $summary$$15$$ ? $oj$$6$$.$Translations$.$applyParameters$($summary$$15$$, $label$$3_params$$7$$) : $oj$$6$$.$Translations$.$getTranslatedString$(this.$_getSummaryKey$(), $label$$3_params$$7$$);
    $detail$$18_localizedDetail$$1$$ = $detail$$18_localizedDetail$$1$$ ? $oj$$6$$.$Translations$.$applyParameters$($detail$$18_localizedDetail$$1$$, $label$$3_params$$7$$) : $oj$$6$$.$Translations$.$getTranslatedString$(this.$_getDetailKey$(), $label$$3_params$$7$$);
    throw new $oj$$6$$.$ValidatorError$($localizedSummary$$1_value$$139$$, $detail$$18_localizedDetail$$1$$);
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("RequiredValidator.prototype.validate", {validate:$oj$$6$$.$RequiredValidator$.prototype.validate});
  $oj$$6$$.$RequiredValidator$.prototype.$getHint$ = function $$oj$$6$$$$RequiredValidator$$$$getHint$$() {
    var $hint$$5$$ = "";
    this.$_options$ && this.$_options$.hint && ($hint$$5$$ = $oj$$6$$.$Translations$.$getTranslatedString$(this.$_options$.hint));
    return $hint$$5$$;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("RequiredValidator.prototype.getHint", {$getHint$:$oj$$6$$.$RequiredValidator$.prototype.$getHint$});
  $oj$$6$$.$RequiredValidator$.prototype.$_getSummaryKey$ = function $$oj$$6$$$$RequiredValidator$$$$_getSummaryKey$$() {
    return $oj$$6$$.$RequiredValidator$.$_BUNDLE_KEY_SUMMARY$;
  };
  $oj$$6$$.$RequiredValidator$.prototype.$_getDetailKey$ = function $$oj$$6$$$$RequiredValidator$$$$_getDetailKey$$() {
    return $oj$$6$$.$RequiredValidator$.$_BUNDLE_KEY_DETAIL$;
  };
  $oj$$6$$.$LengthValidator$ = function $$oj$$6$$$$LengthValidator$$($options$$162$$) {
    this.Init($options$$162$$);
  };
  $goog$exportPath_$$("LengthValidator", $oj$$6$$.$LengthValidator$, $oj$$6$$);
  $oj$$6$$.$Object$.$createSubclass$($oj$$6$$.$LengthValidator$, $oj$$6$$.$Validator$, "oj.LengthValidator");
  $oj$$6$$.$LengthValidator$.prototype.Init = function $$oj$$6$$$$LengthValidator$$$Init$($options$$163$$) {
    $oj$$6$$.$LengthValidator$.$superclass$.Init.call(this);
    this.$_min$ = $options$$163$$.min;
    this.$_max$ = $options$$163$$.max;
    $options$$163$$ && (this.$_hint$ = $options$$163$$.hint || {}, this.$_customMessage$ = $options$$163$$.message || {});
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("LengthValidator.prototype.Init", {Init:$oj$$6$$.$LengthValidator$.prototype.Init});
  $oj$$6$$.$LengthValidator$.prototype.$getHint$ = function $$oj$$6$$$$LengthValidator$$$$getHint$$() {
    var $hint$$6_params$$8$$ = null, $hintMaximum$$1_hints$$5$$ = this.$_hint$, $hintInRange$$1$$ = $hintMaximum$$1_hints$$5$$.hintInRange, $hintMinimum$$1$$ = $hintMaximum$$1_hints$$5$$.hintMinimum, $hintMaximum$$1_hints$$5$$ = $hintMaximum$$1_hints$$5$$.hintMaximum, $translations$$5$$ = $oj$$6$$.$Translations$, $min$$3$$ = void 0 !== this.$_min$ ? parseInt(this.$_min$, 10) : null, $max$$3$$ = void 0 !== this.$_max$ ? parseInt(this.$_max$, 10) : null;
    null !== $min$$3$$ && null !== $max$$3$$ ? $min$$3$$ !== $max$$3$$ ? ($hint$$6_params$$8$$ = {min:$min$$3$$, max:$max$$3$$}, $hint$$6_params$$8$$ = $hintInRange$$1$$ ? $translations$$5$$.$applyParameters$($hintInRange$$1$$, $hint$$6_params$$8$$) : $translations$$5$$.$getTranslatedString$("oj-validator.length.range.hint", $hint$$6_params$$8$$)) : $hint$$6_params$$8$$ = $translations$$5$$.$getTranslatedString$("oj-validator.length.exact.hint", {length:$min$$3$$}) : null !== $min$$3$$ ? ($hint$$6_params$$8$$ = 
    {min:$min$$3$$}, $hint$$6_params$$8$$ = $hintMinimum$$1$$ ? $translations$$5$$.$applyParameters$($hintMinimum$$1$$, $hint$$6_params$$8$$) : $translations$$5$$.$getTranslatedString$("oj-validator.length.min.hint", $hint$$6_params$$8$$)) : null !== $max$$3$$ && ($hint$$6_params$$8$$ = {max:$max$$3$$}, $hint$$6_params$$8$$ = $hintMaximum$$1_hints$$5$$ ? $translations$$5$$.$applyParameters$($hintMaximum$$1_hints$$5$$, $hint$$6_params$$8$$) : $translations$$5$$.$getTranslatedString$("oj-validator.length.max.hint", 
    $hint$$6_params$$8$$));
    return $hint$$6_params$$8$$;
  };
  $oj$$6$$.$LengthValidator$.prototype.validate = function $$oj$$6$$$$LengthValidator$$$validate$($params$$9_value$$140$$) {
    var $string$$1_summary$$16$$ = "", $detail$$19_messageNotInRange$$1$$ = "", $string$$1_summary$$16$$ = "" + $params$$9_value$$140$$, $length$$13$$ = $string$$1_summary$$16$$.length, $customMessage$$2_messageMaximum$$1$$ = this.$_customMessage$, $detail$$19_messageNotInRange$$1$$ = $customMessage$$2_messageMaximum$$1$$.messageNotInRange, $messageMinimum$$1$$ = $customMessage$$2_messageMaximum$$1$$.messageMinimum, $customMessage$$2_messageMaximum$$1$$ = $customMessage$$2_messageMaximum$$1$$.messageMaximum, 
    $translations$$6$$ = $oj$$6$$.$Translations$, $min$$4$$ = void 0 !== this.$_min$ ? parseInt(this.$_min$, 10) : null, $max$$4$$ = void 0 !== this.$_max$ ? parseInt(this.$_max$, 10) : null;
    if ((null === $min$$4$$ || $length$$13$$ >= this.$_min$) && (null === $max$$4$$ || $length$$13$$ <= this.$_max$)) {
      return $string$$1_summary$$16$$;
    }
    0 < this.$_min$ && null !== $max$$4$$ ? this.$_min$ === this.$_max$ ? ($params$$9_value$$140$$ = {value:$params$$9_value$$140$$, length:$min$$4$$}, $string$$1_summary$$16$$ = $translations$$6$$.$getTranslatedString$("oj-validator.length.exact.summary"), $detail$$19_messageNotInRange$$1$$ = $translations$$6$$.$getTranslatedString$("oj-validator.length.exact.detail", $params$$9_value$$140$$)) : ($params$$9_value$$140$$ = {value:$params$$9_value$$140$$, min:$min$$4$$, max:$max$$4$$}, $string$$1_summary$$16$$ = 
    $translations$$6$$.$getTranslatedString$("oj-validator.length.range.summary"), $detail$$19_messageNotInRange$$1$$ = $detail$$19_messageNotInRange$$1$$ ? $translations$$6$$.$applyParameters$($detail$$19_messageNotInRange$$1$$, $params$$9_value$$140$$) : $translations$$6$$.$getTranslatedString$("oj-validator.length.range.detail", $params$$9_value$$140$$)) : $length$$13$$ < this.$_min$ ? ($params$$9_value$$140$$ = {value:$params$$9_value$$140$$, min:$min$$4$$}, $string$$1_summary$$16$$ = $translations$$6$$.$getTranslatedString$("oj-validator.length.min.summary"), 
    $detail$$19_messageNotInRange$$1$$ = $messageMinimum$$1$$ ? $translations$$6$$.$applyParameters$($messageMinimum$$1$$, $params$$9_value$$140$$) : $translations$$6$$.$getTranslatedString$("oj-validator.length.min.detail", $params$$9_value$$140$$)) : ($params$$9_value$$140$$ = {value:$params$$9_value$$140$$, max:$max$$4$$}, $string$$1_summary$$16$$ = $translations$$6$$.$getTranslatedString$("oj-validator.length.max.summary"), $detail$$19_messageNotInRange$$1$$ = $customMessage$$2_messageMaximum$$1$$ ? 
    $translations$$6$$.$applyParameters$($customMessage$$2_messageMaximum$$1$$, $params$$9_value$$140$$) : $translations$$6$$.$getTranslatedString$("oj-validator.length.max.detail", $params$$9_value$$140$$));
    throw new $oj$$6$$.$ValidatorError$($string$$1_summary$$16$$, $detail$$19_messageNotInRange$$1$$);
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("LengthValidator.prototype.validate", {validate:$oj$$6$$.$LengthValidator$.prototype.validate});
  $oj$$6$$.$NumberRangeValidator$ = function _NumberRangeValidator($options$$164$$) {
    this.Init($options$$164$$);
  };
  $goog$exportPath_$$("NumberRangeValidator", $oj$$6$$.$NumberRangeValidator$, $oj$$6$$);
  $oj$$6$$.$Object$.$createSubclass$($oj$$6$$.$NumberRangeValidator$, $oj$$6$$.$Validator$, "oj.NumberRangeValidator");
  $oj$$6$$.$NumberRangeValidator$.prototype.Init = function $$oj$$6$$$$NumberRangeValidator$$$Init$($options$$165$$) {
    $oj$$6$$.$NumberRangeValidator$.$superclass$.Init.call(this);
    this.$_min$ = $options$$165$$.min;
    this.$_max$ = $options$$165$$.max;
    this.$_converter$ = $oj$$6$$.$IntlConverterUtils$.getConverterInstance($options$$165$$.converter);
    $options$$165$$ && (this.$_hint$ = $options$$165$$.hint || {}, this.$_customMessage$ = $options$$165$$.message || {});
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("NumberRangeValidator.prototype.Init", {Init:$oj$$6$$.$NumberRangeValidator$.prototype.Init});
  $oj$$6$$.$NumberRangeValidator$.prototype.validate = function $$oj$$6$$$$NumberRangeValidator$$$validate$($value$$141$$) {
    var $string$$2$$ = $value$$141$$ ? $value$$141$$.toString() : $value$$141$$, $numberValue$$ = parseFloat($string$$2$$), $customMessage$$3_messageMaximum$$2$$ = this.$_customMessage$, $messageNotInRange$$2$$ = $customMessage$$3_messageMaximum$$2$$.messageNotInRange, $messageMinimum$$2$$ = $customMessage$$3_messageMaximum$$2$$.messageMinimum, $customMessage$$3_messageMaximum$$2$$ = $customMessage$$3_messageMaximum$$2$$.messageMaximum, $min$$5$$ = void 0 !== this.$_min$ ? parseFloat(this.$_min$) : 
    null, $max$$5$$ = void 0 !== this.$_max$ ? parseFloat(this.$_max$) : null, $minStr$$2$$ = $min$$5$$ && this.$_converter$ ? this.$_converter$.format($min$$5$$) : $min$$5$$, $maxStr$$2$$ = $max$$5$$ && this.$_converter$ ? this.$_converter$.format($max$$5$$) : $max$$5$$, $summary$$17$$ = "", $detail$$20_params$$10$$ = "", $detail$$20_params$$10$$ = null, $translations$$7$$ = $oj$$6$$.$Translations$;
    if (null === $value$$141$$) {
      return $value$$141$$;
    }
    if (null !== $min$$5$$ && null !== $max$$5$$) {
      if ($numberValue$$ >= $min$$5$$ && $numberValue$$ <= $max$$5$$ || $min$$5$$ > $max$$5$$) {
        return $string$$2$$;
      }
      $detail$$20_params$$10$$ = {value:$value$$141$$, min:$minStr$$2$$, max:$maxStr$$2$$};
      $summary$$17$$ = $translations$$7$$.$getTranslatedString$("oj-validator.range.number.range.summary");
      $detail$$20_params$$10$$ = $messageNotInRange$$2$$ ? $translations$$7$$.$applyParameters$($messageNotInRange$$2$$, $detail$$20_params$$10$$) : $translations$$7$$.$getTranslatedString$("oj-validator.range.number.range.detail", $detail$$20_params$$10$$);
    } else {
      if (null !== $min$$5$$) {
        if ($numberValue$$ >= $min$$5$$) {
          return $string$$2$$;
        }
        $detail$$20_params$$10$$ = {value:$value$$141$$, min:$minStr$$2$$};
        $summary$$17$$ = $translations$$7$$.$getTranslatedString$("oj-validator.range.number.min.summary");
        $detail$$20_params$$10$$ = $messageMinimum$$2$$ ? $translations$$7$$.$applyParameters$($messageMinimum$$2$$, $detail$$20_params$$10$$) : $translations$$7$$.$getTranslatedString$("oj-validator.range.number.min.detail", $detail$$20_params$$10$$);
      } else {
        if (null === $max$$5$$ || $numberValue$$ <= $max$$5$$) {
          return $string$$2$$;
        }
        $detail$$20_params$$10$$ = {value:$value$$141$$, max:$maxStr$$2$$};
        $summary$$17$$ = $translations$$7$$.$getTranslatedString$("oj-validator.range.number.max.summary");
        $detail$$20_params$$10$$ = $customMessage$$3_messageMaximum$$2$$ ? $translations$$7$$.$applyParameters$($customMessage$$3_messageMaximum$$2$$, $detail$$20_params$$10$$) : $translations$$7$$.$getTranslatedString$("oj-validator.range.number.max.detail", $detail$$20_params$$10$$);
      }
    }
    throw new $oj$$6$$.$ValidatorError$($summary$$17$$, $detail$$20_params$$10$$);
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("NumberRangeValidator.prototype.validate", {validate:$oj$$6$$.$NumberRangeValidator$.prototype.validate});
  $oj$$6$$.$NumberRangeValidator$.prototype.$getHint$ = function $$oj$$6$$$$NumberRangeValidator$$$$getHint$$() {
    var $hint$$7$$ = null, $hintMaximum$$2_hints$$6$$ = this.$_hint$, $hintInRange$$2$$ = $hintMaximum$$2_hints$$6$$.hintInRange, $hintMinimum$$2$$ = $hintMaximum$$2_hints$$6$$.hintMinimum, $hintMaximum$$2_hints$$6$$ = $hintMaximum$$2_hints$$6$$.hintMaximum, $translations$$8$$ = $oj$$6$$.$Translations$, $min$$6$$ = void 0 !== this.$_min$ ? parseFloat(this.$_min$) : null, $max$$6$$ = void 0 !== this.$_max$ ? parseFloat(this.$_max$) : null, $minStr$$3$$ = $min$$6$$ && this.$_converter$ ? this.$_converter$.format($min$$6$$) : 
    $min$$6$$, $maxStr$$3$$ = $max$$6$$ && this.$_converter$ ? this.$_converter$.format($max$$6$$) : $max$$6$$;
    null !== $min$$6$$ && null !== $max$$6$$ ? $hint$$7$$ = $hintInRange$$2$$ ? $translations$$8$$.$applyParameters$($hintInRange$$2$$, {min:$minStr$$3$$, max:$maxStr$$3$$}) : $translations$$8$$.$getTranslatedString$("oj-validator.range.number.range.hint", {min:$minStr$$3$$, max:$maxStr$$3$$}) : null !== $min$$6$$ ? $hint$$7$$ = $hintMinimum$$2$$ ? $translations$$8$$.$applyParameters$($hintMinimum$$2$$, {min:$minStr$$3$$}) : $translations$$8$$.$getTranslatedString$("oj-validator.range.number.min.hint", 
    {min:$minStr$$3$$}) : null !== $max$$6$$ && ($hint$$7$$ = $hintMaximum$$2_hints$$6$$ ? $translations$$8$$.$applyParameters$($hintMaximum$$2_hints$$6$$, {max:$maxStr$$3$$}) : $translations$$8$$.$getTranslatedString$("oj-validator.range.number.max.hint", {max:$maxStr$$3$$}));
    return $hint$$7$$;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("NumberRangeValidator.prototype.getHint", {$getHint$:$oj$$6$$.$NumberRangeValidator$.prototype.$getHint$});
  $oj$$6$$.$NumberConverterFactory$ = function() {
    return{createConverter:function($options$$167$$) {
      return new $oj$$6$$.$IntlNumberConverter$($options$$167$$);
    }};
  }();
  $oj$$6$$.$Validation$.$__registerDefaultConverterFactory$($oj$$6$$.$ConverterFactory$.CONVERTER_TYPE_NUMBER, $oj$$6$$.$NumberConverterFactory$);
  $oj$$6$$.$DateTimeConverterFactory$ = function() {
    return{createConverter:function($options$$169$$) {
      return new $oj$$6$$.$IntlDateTimeConverter$($options$$169$$);
    }};
  }();
  $oj$$6$$.$Validation$.$__registerDefaultConverterFactory$($oj$$6$$.$ConverterFactory$.CONVERTER_TYPE_DATETIME, $oj$$6$$.$DateTimeConverterFactory$);
  $oj$$6$$.$RequiredValidatorFactory$ = function() {
    return{createValidator:function($options$$171$$) {
      return new $oj$$6$$.$RequiredValidator$($options$$171$$);
    }};
  }();
  $oj$$6$$.$Validation$.$__registerDefaultValidatorFactory$($oj$$6$$.$ValidatorFactory$.VALIDATOR_TYPE_REQUIRED, $oj$$6$$.$RequiredValidatorFactory$);
  $oj$$6$$.$RegExpValidatorFactory$ = function() {
    return{createValidator:function($options$$173$$) {
      return new $oj$$6$$.$RegExpValidator$($options$$173$$);
    }};
  }();
  $oj$$6$$.$Validation$.$__registerDefaultValidatorFactory$($oj$$6$$.$ValidatorFactory$.VALIDATOR_TYPE_REGEXP, $oj$$6$$.$RegExpValidatorFactory$);
  $oj$$6$$.$DateTimeRangeValidatorFactory$ = function() {
    return{createValidator:function($options$$175$$) {
      return new $oj$$6$$.$DateTimeRangeValidator$($options$$175$$);
    }};
  }();
  $oj$$6$$.$Validation$.$__registerDefaultValidatorFactory$($oj$$6$$.$ValidatorFactory$.VALIDATOR_TYPE_DATETIMERANGE, $oj$$6$$.$DateTimeRangeValidatorFactory$);
  $oj$$6$$.$DateRestrictionValidatorFactory$ = function() {
    return{createValidator:function($options$$177$$) {
      return new $oj$$6$$.$DateRestrictionValidator$($options$$177$$);
    }};
  }();
  $oj$$6$$.$Validation$.$__registerDefaultValidatorFactory$($oj$$6$$.$ValidatorFactory$.VALIDATOR_TYPE_DATERESTRICTION, $oj$$6$$.$DateRestrictionValidatorFactory$);
  $oj$$6$$.$NumberRangeValidatorFactory$ = function() {
    return{createValidator:function($options$$179$$) {
      return new $oj$$6$$.$NumberRangeValidator$($options$$179$$);
    }};
  }();
  $oj$$6$$.$Validation$.$__registerDefaultValidatorFactory$($oj$$6$$.$ValidatorFactory$.VALIDATOR_TYPE_NUMBERRANGE, $oj$$6$$.$NumberRangeValidatorFactory$);
  $oj$$6$$.$LengthValidatorFactory$ = function() {
    return{createValidator:function($options$$181$$) {
      return new $oj$$6$$.$LengthValidator$($options$$181$$);
    }};
  }();
  $oj$$6$$.$Validation$.$__registerDefaultValidatorFactory$($oj$$6$$.$ValidatorFactory$.VALIDATOR_TYPE_LENGTH, $oj$$6$$.$LengthValidatorFactory$);
  $oj$$6$$.$IntlConverterUtils$ = {};
  $oj$$6$$.$IntlConverterUtils$.getConverterInstance = function $$oj$$6$$$$IntlConverterUtils$$getConverterInstance$($cf_converterOption$$1$$) {
    var $cTypeStr$$ = "", $cOptions$$ = {}, $converterInstance$$ = null;
    $cf_converterOption$$1$$ && ("object" === typeof $cf_converterOption$$1$$ && ($cf_converterOption$$1$$ instanceof $oj$$6$$.$Converter$ || $cf_converterOption$$1$$.parse && "function" === typeof $cf_converterOption$$1$$.parse || $cf_converterOption$$1$$.format && "function" === typeof $cf_converterOption$$1$$.format ? $converterInstance$$ = $cf_converterOption$$1$$ : ($cTypeStr$$ = $cf_converterOption$$1$$.type, $cOptions$$ = $cf_converterOption$$1$$.options || {})), $converterInstance$$ || ($cTypeStr$$ = 
    $cTypeStr$$ || $cf_converterOption$$1$$) && "string" === typeof $cTypeStr$$ && ($cf_converterOption$$1$$ = $oj$$6$$.$Validation$.$converterFactory$($cTypeStr$$), $converterInstance$$ = $cf_converterOption$$1$$.createConverter($cOptions$$)));
    return $converterInstance$$;
  };
  $oj$$6$$.$IntlConverterUtils$.$__getConverterOptionError$ = function $$oj$$6$$$$IntlConverterUtils$$$__getConverterOptionError$$($errorCode$$2$$, $parameterMap$$2$$) {
    $oj$$6$$.$Assert$.$assertObject$($parameterMap$$2$$);
    var $summary$$18$$ = "", $detail$$21_reqPropName$$ = "", $propName$$3$$ = $parameterMap$$2$$.propertyName, $propValueValid$$;
    "optionTypesMismatch" === $errorCode$$2$$ ? ($detail$$21_reqPropName$$ = $parameterMap$$2$$.requiredPropertyName, $propValueValid$$ = $parameterMap$$2$$.requiredPropertyValueValid, $summary$$18$$ = $oj$$6$$.$Translations$.$getTranslatedString$("oj-converter.optionTypesMismatch.summary", {propertyName:$propName$$3$$, propertyValue:$parameterMap$$2$$.propertyValue, requiredPropertyName:$detail$$21_reqPropName$$}), $detail$$21_reqPropName$$ = $oj$$6$$.$IntlConverterUtils$.$_getOptionValueDetailMessage$($detail$$21_reqPropName$$, 
    $propValueValid$$)) : "optionTypeInvalid" === $errorCode$$2$$ ? ($propName$$3$$ = $parameterMap$$2$$.propertyName, $propValueValid$$ = $parameterMap$$2$$.propertyValueValid, $summary$$18$$ = $oj$$6$$.$Translations$.$getTranslatedString$("oj-converter.optionTypeInvalid.summary", {propertyName:$propName$$3$$}), $detail$$21_reqPropName$$ = $oj$$6$$.$IntlConverterUtils$.$_getOptionValueDetailMessage$($propName$$3$$, $propValueValid$$)) : "optionOutOfRange" === $errorCode$$2$$ ? ($summary$$18$$ = 
    $oj$$6$$.$Translations$.$getTranslatedString$("oj-converter.optionOutOfRange.summary", {propertyName:$propName$$3$$, propertyValue:$parameterMap$$2$$.propertyValue}), $propValueValid$$ = $parameterMap$$2$$.propertyValueValid, $detail$$21_reqPropName$$ = $oj$$6$$.$IntlConverterUtils$.$_getOptionValueDetailMessage$($propName$$3$$, $propValueValid$$)) : "optionValueInvalid" === $errorCode$$2$$ && ($summary$$18$$ = $oj$$6$$.$Translations$.$getTranslatedString$("oj-converter.optionValueInvalid.summary", 
    {propertyName:$propName$$3$$, propertyValue:$parameterMap$$2$$.propertyValue}), $propValueValid$$ = $parameterMap$$2$$.propertyValueHint, $detail$$21_reqPropName$$ = $oj$$6$$.$IntlConverterUtils$.$_getOptionValueDetailMessage$($propName$$3$$, $propValueValid$$));
    return new $oj$$6$$.$ConverterError$($summary$$18$$, $detail$$21_reqPropName$$);
  };
  $oj$$6$$.$IntlConverterUtils$.$_getOptionValueDetailMessage$ = function $$oj$$6$$$$IntlConverterUtils$$$_getOptionValueDetailMessage$$($propName$$4$$, $propValueValid$$1$$) {
    var $resourceKey$$2$$;
    return $propValueValid$$1$$ ? ("string" === typeof $propValueValid$$1$$ ? $resourceKey$$2$$ = "oj-converter.optionHint.detail" : ($resourceKey$$2$$ = "oj-converter.optionHint.detail-plural", $propValueValid$$1$$ = $propValueValid$$1$$.join($oj$$6$$.$Translations$.$getTranslatedString$("oj-converter.plural-separator"))), $oj$$6$$.$Translations$.$getTranslatedString$($resourceKey$$2$$, {propertyName:$propName$$4$$, propertyValueValid:$propValueValid$$1$$})) : "";
  };
  $oj$$6$$.$IntlConverterUtils$.$__getNullFormattedValue$ = function $$oj$$6$$$$IntlConverterUtils$$$__getNullFormattedValue$$() {
    return "";
  };
});
