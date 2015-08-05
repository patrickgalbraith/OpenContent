﻿/// <autosync enabled="true" />
/// <reference path="../alpaca/js/fields/dnn/CKEditorField.js" />
/// <reference path="../alpaca/js/fields/dnn/ImageField.js" />
/// <reference path="../alpaca/js/fields/dnn/UrlField.js" />
/// <reference path="../alpaca/js/fields/dnn/wysihtmlField.js" />
/// <reference path="../alpaca/js/views/dnn.js" />
/// <reference path="../alpaca/js/views/dnnbootstrap.js" />
/// <reference path="../js/opencontent.js" />
/// <reference path="../js/alpaca-1.5.8/alpaca/bootstrap/alpaca.js" />
/// <reference path="../js/alpaca-1.5.8/alpaca/jquerymobile/alpaca.js" />
/// <reference path="../js/alpaca-1.5.8/alpaca/jqueryui/alpaca.js" />
/// <reference path="../js/alpaca-1.5.8/alpaca/web/alpaca.js" />
/// <reference path="../js/alpaca-1.5.8/lib/handlebars/handlebars.amd.js" />
/// <reference path="../js/alpaca-1.5.8/lib/handlebars/handlebars.js" />
/// <reference path="../js/alpaca-1.5.8/lib/handlebars/handlebars.runtime.amd.js" />
/// <reference path="../js/alpaca-1.5.8/lib/handlebars/handlebars.runtime.js" />
/// <reference path="../js/alpaca-1.5.8/lib/typeahead.js/Gruntfile.js" />
/// <reference path="../js/alpaca-1.5.8/lib/typeahead.js/karma.conf.js" />
/// <reference path="../js/alpaca-1.5.8/lib/typeahead.js/dist/bloodhound.js" />
/// <reference path="../js/alpaca-1.5.8/lib/typeahead.js/dist/typeahead.bundle.js" />
/// <reference path="../js/alpaca-1.5.8/lib/typeahead.js/dist/typeahead.jquery.js" />
/// <reference path="../js/alpaca-1.5.8/lib/typeahead.js/src/bloodhound/bloodhound.js" />
/// <reference path="../js/alpaca-1.5.8/lib/typeahead.js/src/bloodhound/lru_cache.js" />
/// <reference path="../js/alpaca-1.5.8/lib/typeahead.js/src/bloodhound/options_parser.js" />
/// <reference path="../js/alpaca-1.5.8/lib/typeahead.js/src/bloodhound/persistent_storage.js" />
/// <reference path="../js/alpaca-1.5.8/lib/typeahead.js/src/bloodhound/search_index.js" />
/// <reference path="../js/alpaca-1.5.8/lib/typeahead.js/src/bloodhound/tokenizers.js" />
/// <reference path="../js/alpaca-1.5.8/lib/typeahead.js/src/bloodhound/transport.js" />
/// <reference path="../js/alpaca-1.5.8/lib/typeahead.js/src/bloodhound/version.js" />
/// <reference path="../js/alpaca-1.5.8/lib/typeahead.js/src/common/utils.js" />
/// <reference path="../js/alpaca-1.5.8/lib/typeahead.js/src/typeahead/css.js" />
/// <reference path="../js/alpaca-1.5.8/lib/typeahead.js/src/typeahead/dataset.js" />
/// <reference path="../js/alpaca-1.5.8/lib/typeahead.js/src/typeahead/dropdown.js" />
/// <reference path="../js/alpaca-1.5.8/lib/typeahead.js/src/typeahead/event_bus.js" />
/// <reference path="../js/alpaca-1.5.8/lib/typeahead.js/src/typeahead/event_emitter.js" />
/// <reference path="../js/alpaca-1.5.8/lib/typeahead.js/src/typeahead/highlight.js" />
/// <reference path="../js/alpaca-1.5.8/lib/typeahead.js/src/typeahead/html.js" />
/// <reference path="../js/alpaca-1.5.8/lib/typeahead.js/src/typeahead/input.js" />
/// <reference path="../js/alpaca-1.5.8/lib/typeahead.js/src/typeahead/plugin.js" />
/// <reference path="../js/alpaca-1.5.8/lib/typeahead.js/src/typeahead/typeahead.js" />
/// <reference path="../js/alpaca-1.5.8/lib/typeahead.js/test/bloodhound_spec.js" />
/// <reference path="../js/alpaca-1.5.8/lib/typeahead.js/test/dataset_view_spec.js" />
/// <reference path="../js/alpaca-1.5.8/lib/typeahead.js/test/dropdown_view_spec.js" />
/// <reference path="../js/alpaca-1.5.8/lib/typeahead.js/test/event_emitter_spec.js" />
/// <reference path="../js/alpaca-1.5.8/lib/typeahead.js/test/highlight_spec.js" />
/// <reference path="../js/alpaca-1.5.8/lib/typeahead.js/test/input_view_spec.js" />
/// <reference path="../js/alpaca-1.5.8/lib/typeahead.js/test/lru_cache_spec.js" />
/// <reference path="../js/alpaca-1.5.8/lib/typeahead.js/test/persistent_storage_spec.js" />
/// <reference path="../js/alpaca-1.5.8/lib/typeahead.js/test/search_index_spec.js" />
/// <reference path="../js/alpaca-1.5.8/lib/typeahead.js/test/tokenizers_spec.js" />
/// <reference path="../js/alpaca-1.5.8/lib/typeahead.js/test/transport_spec.js" />
/// <reference path="../js/alpaca-1.5.8/lib/typeahead.js/test/typeahead_view_spec.js" />
/// <reference path="../js/alpaca-1.5.8/lib/typeahead.js/test/fixtures/ajax_responses.js" />
/// <reference path="../js/alpaca-1.5.8/lib/typeahead.js/test/fixtures/data.js" />
/// <reference path="../js/alpaca-1.5.8/lib/typeahead.js/test/fixtures/html.js" />
/// <reference path="../js/alpaca-1.5.8/lib/typeahead.js/test/helpers/typeahead_mocks.js" />
/// <reference path="../js/alpaca-1.5.8/lib/typeahead.js/test/integration/test.js" />
/// <reference path="../js/CodeMirror/addon/mode/loadmode.js" />
/// <reference path="../js/CodeMirror/addon/mode/multiplex.js" />
/// <reference path="../js/CodeMirror/addon/mode/multiplex_test.js" />
/// <reference path="../js/CodeMirror/addon/mode/overlay.js" />
/// <reference path="../js/CodeMirror/addon/mode/simple.js" />
/// <reference path="../js/CodeMirror/mode/handlebars/handlebars.js" />
/// <reference path="../js/wysihtml/wysihtml-toolbar.js" />
/// <reference path="../js/wysihtml/wysihtml.js" />
/// <reference path="../js/wysihtml/parser_rules/advanced.js" />
/// <reference path="../js/wysihtml/parser_rules/advanced_and_extended.js" />
/// <reference path="../js/wysihtml/parser_rules/advanced_opencontent.js" />
/// <reference path="../js/wysihtml/parser_rules/advanced_unwrap.js" />
/// <reference path="../js/wysihtml/parser_rules/simple.js" />
/// <reference path="../alpaca/js/fields/dnn/filefield.js" />
/// <reference path="../alpaca/js/fields/dnn/AddressField.js" />
/// <reference path="../js/requirejs/config.js" />
/// <reference path="../js/requirejs/async.js" />
/// <reference path="../js/requirejs/googlemaps.js" />
/// <reference path="../js/requirejs/require.js" />
/// <reference path="../alpaca/js/fields/dnn/datefield.js" />
/// <reference path="../alpaca/js/fields/dnn/numberfield.js" />
