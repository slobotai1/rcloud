RCloud.language = (function() {
    var ace_modes_ = {
        CSS: "ace/mode/css",
        JavaScript: "ace/mode/javascript",
        Text: "ace/mode/text"
    };
    // the keys of the language map come from GitHub's language detection
    // infrastructure which we don't control. (this is likely a bad thing)
    // The values are the extensions we use for the gists.
    var extensions_ = {
        Text: 'txt'
    };
    var hljs_classes_ = {
    };

    var langs_ = [];

    return {
        ace_mode: function(language) {
            return ace_modes_[language] || ace_modes_.Text;
        },
        extension: function(language) {
            return extensions_[language];
        },
        hljs_class: function(language) {
            return hljs_classes_[language] || null;
        },
        // don't call _set_available_languages yourself; it's called
        // by the session initialization code.
        _set_available_languages: function(langs) {
            langs_ = [];
            for(var lang in langs) {
                langs_.push(lang);
                ace_modes_[lang] = langs[lang]['ace.mode'];
                hljs_classes_[lang] = langs[lang]['hljs.class'];
                extensions_[lang] = langs[lang].extension;
            }
        },
        available_languages: function() {
            return langs_;
        }
    };

})();
