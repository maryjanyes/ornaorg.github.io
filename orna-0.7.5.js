//https://github.com/OrnaOrg/OrnaJS
//http://ornaorg.github.io
/*------------------createatom();----Main-and-singular-function---------------------*/
$(document).ready(function() {
    createatom();
});

function createatom(id) {
    if (id === undefined) {
        var tag = ['div', 'body', 'p', 'form', 'button', 'img', 'input', 'a', 'ul', 'ol', 'li', 'select', 'option', 'span', 'table', 'td', 'tr', 'main', 'nav', 'menu', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'textarea', 'fieldset', 'header', 'footer', 'code', 'video', 'audio', 'aside', 'article', 'address', 'blockquote', 'label'];
        /*-----Scan-all-tags------------------------*/
        function toall(tag, tagsize) {
            for (var i = 0; i !== tagsize; i++) {
                var istag = $(tag).is(tag);
                if (istag === true) {
                    var current = tag + ":eq(" + i + ")";
                    stylefilter(current);
                }
            }
        }
        for (var i = 0; i !== tag.length; i++) {
            var tagsize = $(tag[i]).size();
            toall(tag[i], tagsize);
        }
    } else {
        stylefilter(id);
    }
    /*-----Check-the-classes--------------------*/
    function stylefilter(current) {
        var attr = $(current).attr('class');
        var style;
        if (attr !== undefined) {
            style = attr.split(' ');
            for (var i = 0; i !== style.length; i++) {
                var part = style[i].split('_');
                var prop = part[0];
                var val = part[1];

                function addstyle(part, val) {
                    if (val !== undefined) {
                        /*----1--check------*/
                        if (part[2] === undefined) {
                            $(current).css(part[0], part[1]);
                        }
                        /*----2--check------*/
                        else if (part[2] !== undefined && part[3] === undefined) {
                            if (part[2] == 'mouseover') {
                                $(current).on('mouseenter', function() {
                                    $(current).css(part[0], part[1]);
                                });
                            } else if (part[2] == 'mouseout') {
                                $(current).on('mouseleave', function() {
                                    $(current).css(part[0], part[1]);
                                });
                            } else if (part[2] == 'focus') {
                                $(current).on('focusin', function() {
                                    $(current).css(part[0], part[1]);
                                });
                            } else if (part[2] == 'blur') {
                                $(current).on('focusout', function() {
                                    $(current).css(part[0], part[1]);
                                });
                            } else if (part[2] == 'click') {
                                $(current).click(function() {
                                    $(current).css(part[0], part[1]);
                                });
                            } else {
                                $(current + ' ' + part[2]).css(part[0], part[1]);
                            }
                        }
                        /*----3--check-----*/
                        else if (part[2] !== undefined && part[3] !== undefined) {
                            if (part[2] == 'mouseover') {
                                $(current).on('mouseenter', function() {
                                    $(current + ' ' + part[3]).css(part[0], part[1]);
                                });
                            } else if (part[2] == 'mouseout') {
                                $(current).on('mouseleave', function() {
                                    $(current + ' ' + part[3]).css(part[0], part[1]);
                                });
                            } else if (part[2] == 'focus') {
                                $(current).on('focusin', function() {
                                    $(current + ' ' + part[3]).css(part[0], part[1]);
                                });
                            } else if (part[2] == 'blur') {
                                $(current).on('focusout', function() {
                                    $(current + ' ' + part[3]).css(part[0], part[1]);
                                });
                            } else if (part[2] == 'click') {
                                $(current).click(function() {
                                    $(current + ' ' + part[3]).css(part[0], part[1]);
                                });
                            } else {
                                /*----4--check-----*/
                                if (part[3] == 'mouseover') {
                                    $(current + ' ' + part[2]).on('mouseenter', function() {
                                        $(current + ' ' + part[2]).css(part[0], part[1]);
                                    });
                                } else if (part[3] == 'mouseout') {
                                    $(current + ' ' + part[2]).on('mouseleave', function() {
                                        $(current + ' ' + part[2]).css(part[0], part[1]);
                                    });
                                } else if (part[3] == 'focus') {
                                    $(current + ' ' + part[2]).on('focusin', function() {
                                        $(current + ' ' + part[2]).css(part[0], part[1]);
                                    });
                                } else if (part[3] == 'blur') {
                                    $(current + ' ' + part[2]).on('focusout', function() {
                                        $(current + ' ' + part[2]).css(part[0], part[1]);
                                    });
                                } else if (part[3] == 'click') {
                                    $(current + ' ' + part[2]).click(function() {
                                        $(current + ' ' + part[2]).css(part[0], part[1]);
                                    });
                                }
                            }
                        }
                    }
                }
                if (part[0] == "hideatom") {
                    break;
                } else if (part[0] == "ornahelp") {
                    var helpinfo = '<div id="ornahelp"><h2  align="center">Orna - tool for Atomic CSS.</h2> <p>Just write CSS like classes, class="width_100px color_red color_green_click"</p><h3>Structure</h3><p>property_value</p><p>property_value_event</p><p>property_value_childtagname</p><p>property_value_event_childtagname</p><p>property_value_childtagname_event</p><h3>Events</h3><p>click</p><p>focus</p><p>blur</p><p>mouseover</p><p>mouseout</p><h3>Special classes</h3><ol><li>Arial, arial - font</li><br><li>Times, TimesNewRoman - font</li><br><li>center - block elements in center by x axis</li><br><li>textincenter - text and inline elements in center by x axis</li><br><li>block - block element</li><br><li>inline - inline element</li><br><li>inlineblock - inline-block element</li><br><li>uppercase - text in uppercase</li><br><li>lowercase - text in lowercase</li><br><li>capitalize - first symbol in uppercase</li><br><li>hideatom - use for hide element from Orna, must be first in class attribute</li><br><li>flexcenter-, flexstart-, flexend-, flexcenter|, flexstart|, flexend| - use for flexbox</li><br><li>ornahelp - view the help info</li><br></ol><a href="http://ornaorg.github.io" style="text-decoration:none; color:#ee0645">ornaorg.github.io</a><div>';
                    $(current).append(helpinfo);
                    $('#ornahelp').css('background-color', 'rgb(220,220,220)');
                    $('#ornahelp').css('color', 'black');
                    $('#ornahelp').css('height', 'auto');
                    $('#ornahelp').css('width', 'auto');
                    $('#ornahelp').css('position', 'absolute');
                    $('#ornahelp').css('top', '0');
                    $('#ornahelp').css('left', '0');
                    $('#ornahelp').css('right', '0');
                    $('#ornahelp').css('overflow', 'hidden');
                    $('#ornahelp').css('z-index', '1000');
                    $('#ornahelp').css('padding', '10px');
                    $('#ornahelp').css('border', '2px dashed black');
                }
                /*---------Abbreviated-name-&-Molecules-scan--------*/
                else if (part[0] == "rotate") {
                    if (val !== undefined) {
                        part[1] = part[0] + '(' + part[1] + ')';
                        part[0] = 'transform'
                        addstyle(part, val);
                    }
                } else if (part[0] == "scale") {
                    if (val !== undefined) {
                        part[1] = part[0] + '(' + part[1] + ')';
                        part[0] = 'transform'
                        addstyle(part, val);
                    }
                } else if (part[0] == "skew") {
                    if (val !== undefined) {
                        part[1] = part[0] + '(' + part[1] + ')';
                        part[0] = 'transform'
                        addstyle(part, val);
                    }
                } else if (part[0] == "box-shadow" || part[0] == "shadow") {
                    if (val !== undefined) {
                        if (part[2] === undefined || part[3] === undefined) {
                            alert("Hi! I'm Orna! Atomic class shadow or box-shadow need five values: shadow_0_0_20px_10px_black");
                        }
                        part[0] = "box-shadow";
                        part[1] = part[1] + ' ' + part[2] + ' ' + part[3] + ' ' + part[4] + ' ' + part[5];
                        if (part[6] !== undefined) {
                            part[2] = part[6];
                            if (part[7] !== undefined) {
                                part[3] = part[7];
                            } else {
                                delete part[3];
                            }
                        } else {
                            delete part[2];
                        }
                        delete part[4];
                        delete part[5];
                        addstyle(part, val);
                    }
                } else if (part[0] == "text-shadow") {
                    if (val !== undefined) {
                        if (part[2] === undefined || part[3] === undefined) {
                            alert("Hi! I'm Orna! Atomic class text-shadow need five values: text-shadow_0_0_20px_10px_black");
                        }
                        part[1] = part[1] + ' ' + part[2] + ' ' + part[3] + ' ' + part[4] + ' ' + part[5];
                        if (part[6] !== undefined) {
                            part[2] = part[6];
                            if (part[7] !== undefined) {
                                part[3] = part[7];
                            } else {
                                delete part[3];
                            }
                        } else {
                            delete part[2];
                        }
                        delete part[4];
                        delete part[5];
                        addstyle(part, val);
                    }
                } else if (part[0] == "border" && val !== "none" || part[0] == "b" && val !== "none") {
                    if (val !== undefined) {
                        if (part[2] === undefined || part[3] === undefined) {
                            alert("Hi! I'm Orna! Atomic class border need three values width, color and style");
                        }
                        part[1] = part[1] + ' ' + part[2] + ' ' + part[3];
                        if (part[4] !== undefined) {
                            part[2] = part[4];
                            if (part[5] !== undefined) {
                                part[3] = part[5];
                            } else {
                                delete part[3];
                            }
                        } else {
                            delete part[2];
                        }
                        addstyle(part, val);
                    }
                } else if (part[0] == "border-left" && val !== "none" || part[0] == "bl" && val !== "none") {
                    if (val !== undefined) {
                        if (part[2] === undefined || part[3] === undefined) {
                            alert("Hi! I'm Orna! Atomic class border-left need three values width, color and style");
                        }
                        part[1] = part[1] + ' ' + part[2] + ' ' + part[3];
                        if (part[4] !== undefined) {
                            part[2] = part[4];
                            if (part[5] !== undefined) {
                                part[3] = part[5];
                            } else {
                                delete part[3];
                            }
                        } else {
                            delete part[2];
                        }
                        addstyle(part, val);
                    }
                } else if (part[0] == "border-right" && val !== "none" || part[0] == "br" && val !== "none") {
                    if (val !== undefined) {
                        if (part[2] === undefined || part[3] === undefined) {
                            alert("Hi! I'm Orna! Atomic class border-right need three values width, color and style");
                        }
                        part[1] = part[1] + ' ' + part[2] + ' ' + part[3];
                        if (part[4] !== undefined) {
                            part[2] = part[4];
                            if (part[5] !== undefined) {
                                part[3] = part[5];
                            } else {
                                delete part[3];
                            }
                        } else {
                            delete part[2];
                        }
                        addstyle(part, val);
                    }
                } else if (part[0] == "border-top" && val !== "none" || part[0] == "bt" && val !== "none") {
                    if (val !== undefined) {
                        if (part[2] === undefined || part[3] === undefined) {
                            alert("Hi! I'm Orna! Atomic class border-top need three values width, color and style");
                        }
                        part[1] = part[1] + ' ' + part[2] + ' ' + part[3];
                        if (part[4] !== undefined) {
                            part[2] = part[4];
                            if (part[5] !== undefined) {
                                part[3] = part[5];
                            } else {
                                delete part[3];
                            }
                        } else {
                            delete part[2];
                        }
                        addstyle(part, val);
                    }
                } else if (part[0] == "border-bottom" && val !== "none" || part[0] == "bb" && val !== "none") {
                    if (val !== undefined) {
                        if (part[2] === undefined || part[3] === undefined) {
                            alert("Hi! I'm Orna! Atomic class border-bottom need three values width, color and style");
                        }
                        part[1] = part[1] + ' ' + part[2] + ' ' + part[3];
                        if (part[4] !== undefined) {
                            part[2] = part[4];
                            if (part[5] !== undefined) {
                                part[3] = part[5];
                            } else {
                                delete part[3];
                            }
                        } else {
                            delete part[2];
                        }
                        addstyle(part, val);
                    }
                } else if (part[0] == "outline" && val !== "none") {
                    if (val !== undefined) {
                        if (part[2] === undefined || part[3] === undefined) {
                            alert("Hello! I'm Orna! Atomic class outline need three values: width, color, style");
                        }
                        part[1] = part[1] + ' ' + part[2] + ' ' + part[3];
                        delete part[2];
                        delete part[3];
                        addstyle(part, val);
                    }
                } else if (part[0] == "bg") {
                    if (val !== undefined) {
                        part[0] = 'background';
                        addstyle(part, val);
                    }
                } else if (part[0] == "bgc") {
                    if (val !== undefined) {
                        part[0] = 'background-color';
                        addstyle(part, val);
                    }
                } else if (part[0] == "bgp") {
                    if (val !== undefined) {
                        part[0] = 'background-position';
                        addstyle(part, val);
                    }
                } else if (part[0] == "bgr") {
                    if (val !== undefined) {
                        part[0] = 'background-repeat';
                        addstyle(part, val);
                    }
                } else if (part[0] == "bgi") {
                    if (val !== undefined) {
                        part[0] = 'background-image';
                        addstyle(part, val);
                    }
                } else if (part[0] == "bga") {
                    if (val !== undefined) {
                        part[0] = 'background-attachment';
                        addstyle(part, val);
                    }
                } else if (part[0] == "h") {
                    if (val !== undefined) {
                        part[0] = 'height';
                        addstyle(part, val);
                    }
                } else if (part[0] == "w") {
                    if (val !== undefined) {
                        part[0] = 'width';
                        addstyle(part, val);
                    }
                } else if (part[0] == "c") {
                    if (val !== undefined) {
                        part[0] = 'color';
                        addstyle(part, val);
                    }
                } else if (part[0] == "p") {
                    if (val !== undefined) {
                        part[0] = 'padding';
                        addstyle(part, val);
                    }
                } else if (part[0] == "pl") {
                    if (val !== undefined) {
                        part[0] = 'padding-left';
                        addstyle(part, val);
                    }
                } else if (part[0] == "pr") {
                    if (val !== undefined) {
                        part[0] = 'padding-right';
                        addstyle(part, val);
                    }
                } else if (part[0] == "pt") {
                    if (val !== undefined) {
                        part[0] = 'padding-top';
                        addstyle(part, val);
                    }
                } else if (part[0] == "pb") {
                    if (val !== undefined) {
                        part[0] = 'padding-bottom';
                        addstyle(part, val);
                    }
                } else if (part[0] == "m") {
                    if (val !== undefined) {
                        part[0] = 'margin';
                        addstyle(part, val);
                    }
                } else if (part[0] == "ml") {
                    if (val !== undefined) {
                        part[0] = 'margin-left';
                        addstyle(part, val);
                    }
                } else if (part[0] == "mr") {
                    if (val !== undefined) {
                        part[0] = 'margin-right';
                        addstyle(part, val);
                    }
                } else if (part[0] == "mt") {
                    if (val !== undefined) {
                        part[0] = 'margin-top';
                        addstyle(part, val);
                    }
                } else if (part[0] == "mb") {
                    if (val !== undefined) {
                        part[0] = 'margin-bottom';
                        addstyle(part, val);
                    }
                } else if (part[0] == "transition" || part[0] == "tran") {
                    if (part[2] === undefined || part[3] === undefined || part[4] === undefined) {
                        alert("Hello! Atomic class transition need four values, like it: transition_all_1s_ease_0.5s");
                    }
                    if (val !== undefined) {
                        part[0] = 'transition';
                        part[1] = part[1] + ' ' + part[2] + ' ' + part[3] + ' ' + part[4];
                        if (part[5] !== undefined) {
                            part[2] = part[5];
                            if (part[6] !== undefined) {
                                part[3] = part[6];
                            } else {
                                delete part[3];
                            }
                        } else {
                            delete part[2];
                        }
                        delete part[4];
                        addstyle(part, val);
                    }
                } else {
                    addstyle(part, val);
                }
                /*--------------Special-classes---------------*/
                if (part[0] == "Arial" || part[0] == "arial") {
                    if (part[1] !== undefined) {
                        if (part[2] !== undefined) {
                            part[3] = part[2];
                            part[2] = part[1];
                        } else {
                            part[2] = part[1];
                        }
                    }
                    part[0] = 'font-family';
                    part[1] = 'Arial, sans-serif';
                    val = part[1];
                    addstyle(part, val);
                } else if (part[0] == "Times" || part[0] == "TimesNewRoman") {
                    if (part[1] !== undefined) {
                        if (part[2] !== undefined) {
                            part[3] = part[2];
                            part[2] = part[1];
                        } else {
                            part[2] = part[1];
                        }
                    }
                    part[0] = 'font-family';
                    part[1] = '"Times New Roman", serif';
                    val = part[1];
                    addstyle(part, val);
                } else if (part[0] == "center") {
                    if (part[1] !== undefined) {
                        if (part[2] !== undefined) {
                            part[3] = part[2];
                            part[2] = part[1];
                        } else {
                            part[2] = part[1];
                        }
                    }
                    part[0] = 'margin';
                    part[1] = 'auto';
                    val = part[1];
                    addstyle(part, val);
                } else if (part[0] == "textincenter") {
                    if (part[1] !== undefined) {
                        if (part[2] !== undefined) {
                            part[3] = part[2];
                            part[2] = part[1];
                        } else {
                            part[2] = part[1];
                        }
                    }
                    part[0] = 'text-align';
                    part[1] = 'center';
                    val = part[1];
                    addstyle(part, val);
                } else if (part[0] == "uppercase") {
                    if (part[1] !== undefined) {
                        if (part[2] !== undefined) {
                            part[3] = part[2];
                            part[2] = part[1];
                        } else {
                            part[2] = part[1];
                        }
                    }
                    part[0] = 'text-transform';
                    part[1] = 'uppercase';
                    val = part[1];
                    addstyle(part, val);
                } else if (part[0] == "lowercase") {
                    if (part[1] !== undefined) {
                        if (part[2] !== undefined) {
                            part[3] = part[2];
                            part[2] = part[1];
                        } else {
                            part[2] = part[1];
                        }
                    }
                    part[0] = 'text-transform';
                    part[1] = 'lowercase';
                    val = part[1];
                    addstyle(part, val);
                } else if (part[0] == "capitalize") {
                    if (part[1] !== undefined) {
                        if (part[2] !== undefined) {
                            part[3] = part[2];
                            part[2] = part[1];
                        } else {
                            part[2] = part[1];
                        }
                    }
                    part[0] = 'text-transform';
                    part[1] = 'capitalize';
                    val = part[1];
                    addstyle(part, val);
                } else if (part[0] == "inlineblock") {
                    if (part[1] !== undefined) {
                        if (part[2] !== undefined) {
                            part[3] = part[2];
                            part[2] = part[1];
                        } else {
                            part[2] = part[1];
                        }
                    }
                    part[0] = 'display';
                    part[1] = 'inline-block';
                    val = part[1];
                    addstyle(part, val);
                } else if (part[0] == "inline") {
                    if (part[1] !== undefined) {
                        if (part[2] !== undefined) {
                            part[3] = part[2];
                            part[2] = part[1];
                        } else {
                            part[2] = part[1];
                        }
                    }
                    part[0] = 'display';
                    part[1] = 'inline';
                    val = part[1];
                    addstyle(part, val);
                } else if (part[0] == "block") {
                    if (part[1] !== undefined) {
                        if (part[2] !== undefined) {
                            part[3] = part[2];
                            part[2] = part[1];
                        } else {
                            part[2] = part[1];
                        }
                    }
                    part[0] = 'display';
                    part[1] = 'block';
                    val = part[1];
                    addstyle(part, val);
                }
                /*---flexbox---*/
                else if (part[0] == "flexstart-") {
                    if (part[1] !== undefined) {
                        if (part[2] !== undefined) {
                            part[3] = part[2];
                            part[2] = part[1];
                        } else {
                            part[2] = part[1];
                        }
                    }
                    part[0] = 'display';
                    part[1] = 'flex';
                    val = part[1];
                    addstyle(part, val);
                    part[0] = 'justify-content';
                    part[1] = 'flex-start';
                    val = part[1];
                    addstyle(part, val);
                } else if (part[0] == "flexcenter-") {
                    if (part[1] !== undefined) {
                        if (part[2] !== undefined) {
                            part[3] = part[2];
                            part[2] = part[1];
                        } else {
                            part[2] = part[1];
                        }
                    }
                    part[0] = 'display';
                    part[1] = 'flex';
                    val = part[1];
                    addstyle(part, val);
                    part[0] = 'justify-content';
                    part[1] = 'center';
                    val = part[1];
                    addstyle(part, val);
                } else if (part[0] == "flexend-") {
                    if (part[1] !== undefined) {
                        if (part[2] !== undefined) {
                            part[3] = part[2];
                            part[2] = part[1];
                        } else {
                            part[2] = part[1];
                        }
                    }
                    part[0] = 'display';
                    part[1] = 'flex';
                    val = part[1];
                    addstyle(part, val);
                    part[0] = 'justify-content';
                    part[1] = 'flex-end';
                    val = part[1];
                    addstyle(part, val);
                } else if (part[0] == "spacebetween") {
                    if (part[1] !== undefined) {
                        if (part[2] !== undefined) {
                            part[3] = part[2];
                            part[2] = part[1];
                        } else {
                            part[2] = part[1];
                        }
                    }
                    part[0] = 'display';
                    part[1] = 'flex';
                    val = part[1];
                    addstyle(part, val);
                    part[0] = 'justify-content';
                    part[1] = 'space-between';
                    val = part[1];
                    addstyle(part, val);
                } else if (part[0] == "spacearound") {
                    if (part[1] !== undefined) {
                        if (part[2] !== undefined) {
                            part[3] = part[2];
                            part[2] = part[1];
                        } else {
                            part[2] = part[1];
                        }
                    }
                    part[0] = 'display';
                    part[1] = 'flex';
                    val = part[1];
                    addstyle(part, val);
                    part[0] = 'justify-content';
                    part[1] = 'space-around';
                    val = part[1];
                    addstyle(part, val);
                } else if (part[0] == "flexstart|") {
                    if (part[1] !== undefined) {
                        if (part[2] !== undefined) {
                            part[3] = part[2];
                            part[2] = part[1];
                        } else {
                            part[2] = part[1];
                        }
                    }
                    part[0] = 'display';
                    part[1] = 'flex';
                    val = part[1];
                    addstyle(part, val);
                    part[0] = 'align-items';
                    part[1] = 'flex-start';
                    val = part[1];
                    addstyle(part, val);
                } else if (part[0] == "flexcenter|") {
                    if (part[1] !== undefined) {
                        if (part[2] !== undefined) {
                            part[3] = part[2];
                            part[2] = part[1];
                        } else {
                            part[2] = part[1];
                        }
                    }
                    part[0] = 'display';
                    part[1] = 'flex';
                    val = part[1];
                    addstyle(part, val);
                    part[0] = 'align-items';
                    part[1] = 'center';
                    val = part[1];
                    addstyle(part, val);
                } else if (part[0] == "flexend|") {
                    if (part[1] !== undefined) {
                        if (part[2] !== undefined) {
                            part[3] = part[2];
                            part[2] = part[1];
                        } else {
                            part[2] = part[1];
                        }
                    }
                    part[0] = 'display';
                    part[1] = 'flex';
                    val = part[1];
                    addstyle(part, val);
                    part[0] = 'align-items';
                    part[1] = 'flex-end';
                    val = part[1];
                    addstyle(part, val);
                } else if (part[0] == "baseline") {
                    if (part[1] !== undefined) {
                        if (part[2] !== undefined) {
                            part[3] = part[2];
                            part[2] = part[1];
                        } else {
                            part[2] = part[1];
                        }
                    }
                    part[0] = 'display';
                    part[1] = 'flex';
                    val = part[1];
                    addstyle(part, val);
                    part[0] = 'align-items';
                    part[1] = 'baseline';
                    val = part[1];
                    addstyle(part, val);
                } else if (part[0] == "stretch") {
                    if (part[1] !== undefined) {
                        if (part[2] !== undefined) {
                            part[3] = part[2];
                            part[2] = part[1];
                        } else {
                            part[2] = part[1];
                        }
                    }
                    part[0] = 'display';
                    part[1] = 'flex';
                    val = part[1];
                    addstyle(part, val);
                    part[0] = 'align-items';
                    part[1] = 'stretch';
                    val = part[1];
                    addstyle(part, val);
                }
            }
        }
    }
}