﻿window.globalProvideData('slide', '{"title":"Please enter your name below as you would like it to appear on your certificate, then click the checkmark in the lower right corner of the player.","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":39,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide40","width":960,"height":540,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xFFFFFF","alpha":100,"stop":0}]}},"id":"6fkYKVvoyBc","actionGroups":{"ActGrpOnSubmitButtonClick":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"noteq","valuea":"6KOUFDgQgHo.$Text","typea":"property","valueb":"","typeb":"string"}},"thenActions":[{"kind":"eval_interaction","id":"_this.6WDPOsZUwJO"}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_6BTXIxVGhQG.InvalidPromptSlide"}}]},{"kind":"exe_actiongroup","id":"_this.NavigationRestrictionNextSlide_6fkYKVvoyBc"}]},"ReviewInt_5uP6LNNUc7a":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6KOUFDgQgHo"},"enabled":{"type":"boolean","value":false}}]},"ReviewIntCorrectIncorrect_5uP6LNNUc7a":{"kind":"actiongroup","actions":[]},"AnsweredInt_5uP6LNNUc7a":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_5uP6LNNUc7a"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns11111000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns11111000101"}]}]},"DisableChoices_5uP6LNNUc7a":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6KOUFDgQgHo"},"enabled":{"type":"boolean","value":false}}]},"5uP6LNNUc7a_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6WDPOsZUwJO.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5uP6LNNUc7a"}]}]},"NavigationRestrictionNextSlide_6fkYKVvoyBc":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.6jPu6CUGuqb"}}]},"NavigationRestrictionPreviousSlide_6fkYKVvoyBc":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onslidestart","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_playerVars.#hasPrevHistory","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"enable_window_control","name":"previous","enable":false,"affectTabStop":true}]}]},{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbsnfns11111000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbsnfns11111000101"}]}]},{"kind":"onsubmitslide","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnSubmitButtonClick"}]},{"kind":"ontransitionin","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"_player.#TimelineCompleted_6fkYKVvoyBc","typea":"var","valueb":false,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_5uP6LNNUc7a","typea":"var","valueb":false,"typeb":"boolean"}]}},"thenActions":[{"kind":"enable_window_control","name":"next","enable":false,"affectTabStop":false},{"kind":"enable_window_control","name":"swiperight","enable":false,"affectTabStop":false}]},{"kind":"adjustvar","variable":"_player.LastSlideViewed_6BTXIxVGhQG","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_6BTXIxVGhQG","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"exe_actiongroup","id":"5uP6LNNUc7a_CheckAnswered"}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_5uP6LNNUc7a","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.6jPu6CUGuqb"}}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_5uP6LNNUc7a","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.6jPu6CUGuqb"}}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_6fkYKVvoyBc"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_6fkYKVvoyBc"}]},{"kind":"ontimelinecomplete","actions":[{"kind":"adjustvar","variable":"_player.TimelineCompleted_6fkYKVvoyBc","operator":"set","value":{"type":"boolean","value":true}},{"kind":"enable_window_control","name":"next","enable":true,"affectTabStop":false},{"kind":"enable_window_control","name":"swiperight","enable":true,"affectTabStop":false}]}],"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":5000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6KOUFDgQgHo"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5gdlSLL0z2D"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5bJLIIY7MNx"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5ezyJHoscsX"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6CHELfFIWO9"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6p9BJxkYhpE"}}]}]},"objects":[{"kind":"textinput","bindto":"_player.NameEntry","align":"center","verticalAlign":"top","rtl":false,"numeric":false,"multiline":false,"maxchars":256,"placeholder":"Type your name here","fontsize":16,"textcolor":"0x001662","bold":true,"italic":false,"font":"Open SansBold CharsBoldE47A47C6","marginleft":10,"marginright":10,"margintop":0,"marginbottom":0,"shapemaskId":"","xPos":48,"yPos":272,"tabIndex":4,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":431.5,"rotateYPos":14.5,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"6KOUFDgQgHo","linkId":"","type":"vectortext","xPos":10,"yPos":5,"xAccOffset":0,"yAccOffset":0,"width":844,"height":30,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":500,"bottom":20,"pngfb":false,"pr":{"l":"Lib","i":296}}},"html5data":{"xPos":0,"yPos":0,"width":864,"height":30,"strokewidth":1}},"width":864,"height":30,"resume":true,"useHandCursor":true,"background":{"type":"vector","vectorData":{"left":-1,"top":-1,"right":865,"bottom":31,"altText":"Type your name here","pngfb":false,"pr":{"l":"Lib","i":295}}},"id":"6KOUFDgQgHo","events":[{"kind":"onlosefocus","actions":[{"kind":"adjustvar","variable":"_player.NameEntry","operator":"set","value":{"type":"property","value":"$Text"}}]},{"kind":"onkeypress","keycode":13,"shift":false,"ctrl":false,"alt":false,"actions":[{"kind":"exe_actiongroup","id":"_parent.ActGrpOnSubmitButtonClick"}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5gdlSLL0z2D_172625129","id":"01","linkId":"txt__default_5gdlSLL0z2D","type":"acctext","xPos":10,"yPos":5,"xAccOffset":10,"yAccOffset":5,"width":844,"height":83,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Please enter your name below as you would like it to appear on your certificate, then click the checkmark in the lower right corner of the player.","style":{"fontFamily":"\\"ArialBold Charset0_Bold3D70FAD3\\",\\"Arial\\"","fontSize":18,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"displayCase":"asIs","foregroundColor":"#001662","linkColor":"#001662","ascent":21.727,"descent":5.086,"leading":0.785,"underlinePosition":-2.543,"underlineThickness":2.52,"xHeight":12.445}}],"style":{"leadingMargin":0,"firstLineMargin":0,"justification":"left","lineSpacingRule":"multiple","lineSpacing":20,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":18.5,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"displayCase":"asIs","foregroundColor":"#000000"},"tagType":"P"},"runs":[{"idx":0,"len":146,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":18.5,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":797,"bottom":89,"pngfb":false,"pr":{"l":"Lib","i":298}}}],"shapemaskId":"","xPos":48,"yPos":160,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":432,"rotateYPos":46.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":864,"bottom":93,"altText":"Please enter your name below as you would like it to appear on your certificate, then click the checkmark in the lower right corner of the player.","pngfb":false,"pr":{"l":"Lib","i":297}},"html5data":{"xPos":0,"yPos":0,"width":864,"height":93,"strokewidth":0}},"width":864,"height":93,"resume":true,"useHandCursor":true,"id":"5gdlSLL0z2D"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5bJLIIY7MNx_815097803","id":"01","linkId":"txt__default_5bJLIIY7MNx","type":"acctext","xPos":10,"yPos":5,"xAccOffset":10,"yAccOffset":5,"width":145,"height":11,"valign":"top","wordwrap":false,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Contractor Training – 2023 Version","style":{"fontFamily":"\\"Arial Charset0_v8wz5YMo9EE9FF07\\",\\"Arial\\"","fontSize":7,"foregroundColor":"#001662","linkColor":"#0563C1","ascent":8.449,"descent":1.978,"leading":0.305,"underlinePosition":-0.989,"underlineThickness":0.684,"xHeight":4.84}}],"style":{"justification":"left","tagType":"P"},"runs":[{"idx":0,"len":34,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":12,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":155,"bottom":17,"pngfb":false,"pr":{"l":"Lib","i":15}}}],"shapemaskId":"","xPos":758,"yPos":67,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":82.5,"rotateYPos":10.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":165,"bottom":21,"altText":"Contractor Training – 2023 Version","pngfb":false,"pr":{"l":"Lib","i":14}},"html5data":{"xPos":0,"yPos":0,"width":165,"height":21,"strokewidth":0}},"width":165,"height":21,"resume":true,"useHandCursor":true,"id":"5bJLIIY7MNx"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","id":"01","linkId":"txt__default_5ezyJHoscsX","type":"richvartext","xPos":10,"yPos":5,"xAccOffset":0,"yAccOffset":0,"width":11,"height":13,"device":false,"valign":"top","wordwrap":false,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"%_playerVars.menuSlideNumber%","style":{"fontSize":7,"foregroundColor":"#FF5C57","linkColor":"#FF5C57","fontFamily":"\\"Open Sans Charset0_v9TY33EDE6F2\\",\\"Open Sans\\"","ascent":9.976,"descent":2.734,"leading":0,"underlinePosition":-0.456,"underlineThickness":0.228,"xHeight":4.995}}],"style":{"tagType":"P"},"runs":[{"idx":0,"len":29,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":12,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"}}],"shapemaskId":"","xPos":923,"yPos":507,"tabIndex":5,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":15.5,"rotateYPos":11.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":31,"bottom":23,"altText":"%_playerVars.menuSlideNumber%","pngfb":false,"pr":{"l":"Lib","i":299}},"html5data":{"xPos":0,"yPos":0,"width":31,"height":23,"strokewidth":0}},"width":31,"height":23,"resume":true,"useHandCursor":true,"id":"5ezyJHoscsX"},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":7,"id":"01","url":"story_content/5nKde0KRBA5.png","type":"normal","altText":"Picture 2.png","width":464,"height":98,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":728,"yPos":19,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":116,"rotateYPos":24.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":232,"bottom":49,"altText":"Picture 2.png","pngfb":false,"pr":{"l":"Lib","i":6}},"html5data":{"xPos":0,"yPos":0,"width":232,"height":49,"strokewidth":0}},"width":232,"height":49,"resume":true,"useHandCursor":true,"id":"6CHELfFIWO9"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":42,"yPos":88,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":440,"rotateYPos":-0.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":883,"bottom":2,"altText":"Line 1","pngfb":false,"pr":{"l":"Lib","i":300}},"html5data":{"xPos":-2,"yPos":-2,"width":885,"height":4,"strokewidth":1}},"width":881,"height":0,"resume":true,"useHandCursor":true,"id":"6p9BJxkYhpE"}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');