export default [
	{
		filename: 'mimetype',
		contents: 'application/vnd.oasis.opendocument.spreadsheet',
		type: 'string',
	},
	{
		filename: 'META-INF/manifest.xml',
		contents: '<?xml version="1.0" encoding="UTF-8"?><manifest:manifest xmlns:manifest="urn:oasis:names:tc:opendocument:xmlns:manifest:1.0" xmlns:loext="urn:org:documentfoundation:names:experimental:office:xmlns:loext:1.0" manifest:version="1.3"><manifest:file-entry manifest:full-path="/" manifest:version="1.3" manifest:media-type="application/vnd.oasis.opendocument.spreadsheet"/><manifest:file-entry manifest:full-path="meta.xml" manifest:media-type="text/xml"/><manifest:file-entry manifest:full-path="styles.xml" manifest:media-type="text/xml"/><manifest:file-entry manifest:full-path="content.xml" manifest:media-type="text/xml"/></manifest:manifest>',
		type: 'string',
	},
	{
		filename: 'content.xml',
		contents: [
			{
				type: 'template',
				contents: {
					compiler: [8, '>= 4.3.0'], main(container, depth0, helpers, partials, data) {
						return '<?xml version="1.0" encoding="UTF-8"?><office:document-content xmlns:presentation="urn:oasis:names:tc:opendocument:xmlns:presentation:1.0" xmlns:css3t="http://www.w3.org/TR/css3-text/" xmlns:grddl="http://www.w3.org/2003/g/data-view#" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xforms="http://www.w3.org/2002/xforms" xmlns:dom="http://www.w3.org/2001/xml-events" xmlns:script="urn:oasis:names:tc:opendocument:xmlns:script:1.0" xmlns:form="urn:oasis:names:tc:opendocument:xmlns:form:1.0" xmlns:math="http://www.w3.org/1998/Math/MathML" xmlns:number="urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0" xmlns:field="urn:openoffice:names:experimental:ooo-ms-interop:xmlns:field:1.0" xmlns:meta="urn:oasis:names:tc:opendocument:xmlns:meta:1.0" xmlns:loext="urn:org:documentfoundation:names:experimental:office:xmlns:loext:1.0" xmlns:table="urn:oasis:names:tc:opendocument:xmlns:table:1.0" xmlns:chart="urn:oasis:names:tc:opendocument:xmlns:chart:1.0" xmlns:tableooo="http://openoffice.org/2009/table" xmlns:draw="urn:oasis:names:tc:opendocument:xmlns:drawing:1.0" xmlns:rpt="http://openoffice.org/2005/report" xmlns:dr3d="urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0" xmlns:of="urn:oasis:names:tc:opendocument:xmlns:of:1.2" xmlns:text="urn:oasis:names:tc:opendocument:xmlns:text:1.0" xmlns:style="urn:oasis:names:tc:opendocument:xmlns:style:1.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:calcext="urn:org:documentfoundation:names:experimental:calc:xmlns:calcext:1.0" xmlns:oooc="http://openoffice.org/2004/calc" xmlns:drawooo="http://openoffice.org/2010/draw" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:ooo="http://openoffice.org/2004/office" xmlns:ooow="http://openoffice.org/2004/writer" xmlns:fo="urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0" xmlns:formx="urn:openoffice:names:experimental:ooxml-odf-interop:xmlns:form:1.0" xmlns:svg="urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0" xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" office:version="1.3"><office:scripts/><office:font-face-decls><style:font-face style:name="Arial" svg:font-family="Arial" style:font-adornments="Regular" style:font-family-generic="swiss" style:font-pitch="variable"/><style:font-face style:name="Liberation Sans" svg:font-family="\'Liberation Sans\'" style:font-family-generic="swiss" style:font-pitch="variable"/><style:font-face style:name="Arial Unicode MS" svg:font-family="\'Arial Unicode MS\'" style:font-family-generic="system" style:font-pitch="variable"/><style:font-face style:name="PingFang SC" svg:font-family="\'PingFang SC\'" style:font-family-generic="system" style:font-pitch="variable"/></office:font-face-decls><office:automatic-styles><style:style style:name="co1" style:family="table-column"><style:table-column-properties fo:break-before="auto" style:column-width="2.258cm"/></style:style>';
					}, useData: true,
				},
			},
			{
				type: 'sheets',
				contents: {
					1(container, depth0, helpers, partials, data) {
						let helper; const alias1 = depth0 == null ? (container.nullContext || {}) : depth0; const alias2 = container.hooks.helperMissing; const alias3 = 'function'; const alias4 = container.escapeExpression; const
							lookupProperty = container.lookupProperty || function (parent, propertyName) {
								if (Object.hasOwn(parent, propertyName)) {
									return parent[propertyName];
								}

								return undefined;
							};

						return '<style:style style:name="'
    + alias4(((helper = (helper = lookupProperty(helpers, 'name') || (depth0 == null ? depth0 : lookupProperty(depth0, 'name'))) == null ? alias2 : helper), (typeof helper === alias3 ? helper.call(alias1, {
    	name: 'name', hash: {}, data, loc: {start: {line: 1, column: 42}, end: {line: 1, column: 50}},
    }) : helper)))
    + '" style:family="table-column"><style:table-column-properties fo:break-before="auto" style:column-width="'
    + alias4(((helper = (helper = lookupProperty(helpers, 'widthCm') || (depth0 == null ? depth0 : lookupProperty(depth0, 'widthCm'))) == null ? alias2 : helper), (typeof helper === alias3 ? helper.call(alias1, {
    	name: 'widthCm', hash: {}, data, loc: {start: {line: 1, column: 154}, end: {line: 1, column: 165}},
    }) : helper)))
    + 'cm"/></style:style>';
					}, compiler: [8, '>= 4.3.0'], main(container, depth0, helpers, partials, data) {
						let stack1; let helper; let options; const
							lookupProperty = container.lookupProperty || function (parent, propertyName) {
								if (Object.hasOwn(parent, propertyName)) {
									return parent[propertyName];
								}

								return undefined;
							};

						stack1 = ((helper = (helper = lookupProperty(helpers, 'columnStyles') || (depth0 == null ? depth0 : lookupProperty(depth0, 'columnStyles'))) == null ? container.hooks.helperMissing : helper), (options = {
							name: 'columnStyles', hash: {}, fn: container.program(1, data, 0), inverse: container.noop, data, loc: {start: {line: 1, column: 0}, end: {line: 1, column: 201}},
						}), (typeof helper === 'function' ? helper.call(depth0 == null ? (container.nullContext || {}) : depth0, options) : helper));
						if (!lookupProperty(helpers, 'columnStyles')) {
							stack1 = container.hooks.blockHelperMissing.call(depth0, stack1, options);
						}

						if (stack1 == null) {
							return '';
						}

						return stack1;
					}, useData: true,
				},
			},
			{
				type: 'template',
				contents: {
					1(container, depth0, helpers, partials, data) {
						let helper; const alias1 = depth0 == null ? (container.nullContext || {}) : depth0; const alias2 = container.hooks.helperMissing; const alias3 = 'function'; const alias4 = container.escapeExpression; const
							lookupProperty = container.lookupProperty || function (parent, propertyName) {
								if (Object.hasOwn(parent, propertyName)) {
									return parent[propertyName];
								}

								return undefined;
							};

						return '<style:style style:name="'
    + alias4(((helper = (helper = lookupProperty(helpers, 'styleName') || (depth0 == null ? depth0 : lookupProperty(depth0, 'styleName'))) == null ? alias2 : helper), (typeof helper === alias3 ? helper.call(alias1, {
    	name: 'styleName', hash: {}, data, loc: {start: {line: 1, column: 751}, end: {line: 1, column: 764}},
    }) : helper)))
    + '" style:family="table-row"><style:table-row-properties style:row-height="'
    + alias4(((helper = (helper = lookupProperty(helpers, 'rowHeightCm') || (depth0 == null ? depth0 : lookupProperty(depth0, 'rowHeightCm'))) == null ? alias2 : helper), (typeof helper === alias3 ? helper.call(alias1, {
    	name: 'rowHeightCm', hash: {}, data, loc: {start: {line: 1, column: 837}, end: {line: 1, column: 852}},
    }) : helper)))
    + 'cm" fo:break-before="auto" style:use-optimal-row-height="false"/></style:style>';
					}, 3(container, depth0, helpers, partials, data) {
						let stack1; let helper; let options; const alias1 = depth0 == null ? (container.nullContext || {}) : depth0; const alias2 = container.hooks.helperMissing; const alias3 = 'function'; const alias4 = container.hooks.blockHelperMissing; const lookupProperty = container.lookupProperty || function (parent, propertyName) {
							if (Object.hasOwn(parent, propertyName)) {
								return parent[propertyName];
							}

							return undefined;
						};

						let
							buffer = '';

						stack1 = ((helper = (helper = lookupProperty(helpers, 'isSubtitle') || (depth0 == null ? depth0 : lookupProperty(depth0, 'isSubtitle'))) == null ? alias2 : helper), (options = {
							name: 'isSubtitle', hash: {}, fn: container.program(4, data, 0), inverse: container.noop, data, loc: {start: {line: 1, column: 3776}, end: {line: 1, column: 4013}},
						}), (typeof helper === alias3 ? helper.call(alias1, options) : helper));
						if (!lookupProperty(helpers, 'isSubtitle')) {
							stack1 = alias4.call(depth0, stack1, options);
						}

						if (stack1 != null) {
							buffer += stack1;
						}

						stack1 = ((helper = (helper = lookupProperty(helpers, 'isSubtitle') || (depth0 == null ? depth0 : lookupProperty(depth0, 'isSubtitle'))) == null ? alias2 : helper), (options = {
							name: 'isSubtitle', hash: {}, fn: container.noop, inverse: container.program(6, data, 0), data, loc: {start: {line: 1, column: 4013}, end: {line: 1, column: 4533}},
						}), (typeof helper === alias3 ? helper.call(alias1, options) : helper));
						if (!lookupProperty(helpers, 'isSubtitle')) {
							stack1 = alias4.call(depth0, stack1, options);
						}

						if (stack1 != null) {
							buffer += stack1;
						}

						return buffer;
					}, 4(container, depth0, helpers, partials, data) {
						let helper; const
							lookupProperty = container.lookupProperty || function (parent, propertyName) {
								if (Object.hasOwn(parent, propertyName)) {
									return parent[propertyName];
								}

								return undefined;
							};

						return '<table:table-row table:style-name="ro3"><table:table-cell table:style-name="Heading_20_2" office:value-type="string" calcext:value-type="string"><text:p>'
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers, 'text') || (depth0 == null ? depth0 : lookupProperty(depth0, 'text'))) == null ? container.hooks.helperMissing : helper), (typeof helper === 'function' ? helper.call(depth0 == null ? (container.nullContext || {}) : depth0, {
    	name: 'text', hash: {}, data, loc: {start: {line: 1, column: 3944}, end: {line: 1, column: 3952}},
    }) : helper)))
    + '</text:p></table:table-cell></table:table-row>';
					}, 6(container, depth0, helpers, partials, data) {
						let stack1; let helper; let options; const alias1 = depth0 == null ? (container.nullContext || {}) : depth0; const alias2 = container.hooks.helperMissing; const alias3 = 'function'; const alias4 = container.hooks.blockHelperMissing; const lookupProperty = container.lookupProperty || function (parent, propertyName) {
							if (Object.hasOwn(parent, propertyName)) {
								return parent[propertyName];
							}

							return undefined;
						};

						let
							buffer
  = '<table:table-row table:style-name="coverSheetRowStyle_'
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers, 'rowCount') || (depth0 == null ? depth0 : lookupProperty(depth0, 'rowCount'))) == null ? alias2 : helper), (typeof helper === alias3 ? helper.call(alias1, {
    	name: 'rowCount', hash: {}, data, loc: {start: {line: 1, column: 4082}, end: {line: 1, column: 4094}},
    }) : helper)))
    + '">';
						stack1 = ((helper = (helper = lookupProperty(helpers, 'isText') || (depth0 == null ? depth0 : lookupProperty(depth0, 'isText'))) == null ? alias2 : helper), (options = {
							name: 'isText', hash: {}, fn: container.program(7, data, 0), inverse: container.noop, data, loc: {start: {line: 1, column: 4096}, end: {line: 1, column: 4258}},
						}), (typeof helper === alias3 ? helper.call(alias1, options) : helper));
						if (!lookupProperty(helpers, 'isText')) {
							stack1 = alias4.call(depth0, stack1, options);
						}

						if (stack1 != null) {
							buffer += stack1;
						}

						stack1 = ((helper = (helper = lookupProperty(helpers, 'isHyperlink') || (depth0 == null ? depth0 : lookupProperty(depth0, 'isHyperlink'))) == null ? alias2 : helper), (options = {
							name: 'isHyperlink', hash: {}, fn: container.program(9, data, 0), inverse: container.noop, data, loc: {start: {line: 1, column: 4258}, end: {line: 1, column: 4500}},
						}), (typeof helper === alias3 ? helper.call(alias1, options) : helper));
						if (!lookupProperty(helpers, 'isHyperlink')) {
							stack1 = alias4.call(depth0, stack1, options);
						}

						if (stack1 != null) {
							buffer += stack1;
						}

						return buffer + '</table:table-row>';
					}, 7(container, depth0, helpers, partials, data) {
						let helper; const
							lookupProperty = container.lookupProperty || function (parent, propertyName) {
								if (Object.hasOwn(parent, propertyName)) {
									return parent[propertyName];
								}

								return undefined;
							};

						return '<table:table-cell table:style-name="ce5" office:value-type="string" calcext:value-type="string"><text:p>'
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers, 'text') || (depth0 == null ? depth0 : lookupProperty(depth0, 'text'))) == null ? container.hooks.helperMissing : helper), (typeof helper === 'function' ? helper.call(depth0 == null ? (container.nullContext || {}) : depth0, {
    	name: 'text', hash: {}, data, loc: {start: {line: 1, column: 4211}, end: {line: 1, column: 4219}},
    }) : helper)))
    + '</text:p></table:table-cell>';
					}, 9(container, depth0, helpers, partials, data) {
						let helper; const alias1 = depth0 == null ? (container.nullContext || {}) : depth0; const alias2 = container.hooks.helperMissing; const alias3 = 'function'; const alias4 = container.escapeExpression; const
							lookupProperty = container.lookupProperty || function (parent, propertyName) {
								if (Object.hasOwn(parent, propertyName)) {
									return parent[propertyName];
								}

								return undefined;
							};

						return '<table:table-cell table:style-name="cell_hyperlink" office:value-type="string" calcext:value-type="string"><text:p><text:a xlink:href="'
    + alias4(((helper = (helper = lookupProperty(helpers, 'href') || (depth0 == null ? depth0 : lookupProperty(depth0, 'href'))) == null ? alias2 : helper), (typeof helper === alias3 ? helper.call(alias1, {
    	name: 'href', hash: {}, data, loc: {start: {line: 1, column: 4409}, end: {line: 1, column: 4417}},
    }) : helper)))
    + '" xlink:type="simple">'
    + alias4(((helper = (helper = lookupProperty(helpers, 'text') || (depth0 == null ? depth0 : lookupProperty(depth0, 'text'))) == null ? alias2 : helper), (typeof helper === alias3 ? helper.call(alias1, {
    	name: 'text', hash: {}, data, loc: {start: {line: 1, column: 4439}, end: {line: 1, column: 4447}},
    }) : helper)))
    + '</text:a></text:p></table:table-cell>';
					}, compiler: [8, '>= 4.3.0'], main(container, depth0, helpers, partials, data) {
						let stack1; let helper; let options; const alias1 = depth0 == null ? (container.nullContext || {}) : depth0; const alias2 = container.hooks.helperMissing; const alias3 = 'function'; const alias4 = container.hooks.blockHelperMissing; const lookupProperty = container.lookupProperty || function (parent, propertyName) {
							if (Object.hasOwn(parent, propertyName)) {
								return parent[propertyName];
							}

							return undefined;
						};

						let
							buffer
  = '<style:style style:name="co3" style:family="table-column"><style:table-column-properties fo:break-before="auto" style:column-width="15.723cm"/></style:style><style:style style:name="contents_and_notes_column_2" style:family="table-column"><style:table-column-properties fo:break-before="auto" style:column-width="12cm"/></style:style><style:style style:name="ro1" style:family="table-row"><style:table-row-properties style:row-height="0.778cm" fo:break-before="auto" style:use-optimal-row-height="true"/></style:style><style:style style:name="ro2" style:family="table-row"><style:table-row-properties style:row-height="0.529cm" fo:break-before="auto" style:use-optimal-row-height="true"/></style:style>';
						stack1 = ((helper = (helper = lookupProperty(helpers, 'coverSheetRowStyles') || (depth0 == null ? depth0 : lookupProperty(depth0, 'coverSheetRowStyles'))) == null ? alias2 : helper), (options = {
							name: 'coverSheetRowStyles', hash: {}, fn: container.program(1, data, 0), inverse: container.noop, data, loc: {start: {line: 1, column: 702}, end: {line: 1, column: 955}},
						}), (typeof helper === alias3 ? helper.call(alias1, options) : helper));
						if (!lookupProperty(helpers, 'coverSheetRowStyles')) {
							stack1 = alias4.call(depth0, stack1, options);
						}

						if (stack1 != null) {
							buffer += stack1;
						}

						buffer += '<style:style style:name="intro_text_row" style:family="table-row"><style:table-row-properties style:row-height="0.55cm" fo:break-before="auto" style:use-optimal-row-height="false"/></style:style><style:style style:name="intro_text_last_row" style:family="table-row"><style:table-row-properties style:row-height="1cm" fo:break-before="auto" style:use-optimal-row-height="false"/></style:style><style:style style:name="ro3" style:family="table-row"><style:table-row-properties style:row-height="1.25cm" fo:break-before="auto"/></style:style><style:style style:name="ta1" style:family="table" style:master-page-name="Default"><style:table-properties table:display="true" style:writing-mode="lr-tb"/></style:style><style:style style:name="ce5" style:family="table-cell" style:parent-style-name="Default"><style:table-cell-properties fo:wrap-option="wrap"/></style:style><style:style style:name="ce6" style:family="table-cell" style:parent-style-name="Default"><style:table-cell-properties fo:wrap-option="wrap"/><style:text-properties fo:font-weight="bold" style:font-weight-asian="bold" style:font-weight-complex="bold"/></style:style><style:style style:name="right_aligned_table_heading" style:family="table-cell" style:parent-style-name="Default"><style:table-cell-properties fo:wrap-option="wrap" style:text-align-source="fix" style:repeat-content="false"/><style:paragraph-properties fo:text-align="end" fo:margin-left="0cm"/><style:text-properties fo:font-weight="bold" style:font-weight-asian="bold" style:font-weight-complex="bold"/></style:style><style:style style:name="cell_intro_text" style:family="table-cell" style:parent-style-name="Default"><style:table-cell-properties style:vertical-align="top"/></style:style><style:style style:name="cell_hyperlink" style:family="table-cell" style:parent-style-name="Hyperlink"/><style:style style:name="cell_number_1dp" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N111"/><style:style style:name="cell_number_2dp" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N112"/><style:style style:name="cell_number_with_commas" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="number_with_commas"/></office:automatic-styles><office:body><office:spreadsheet><table:calculation-settings table:automatic-find-labels="false" table:use-regular-expressions="false" table:use-wildcards="true"/><table:table table:name="Cover_sheet" table:style-name="ta1"><table:table-column table:style-name="co3" table:default-cell-style-name="Default"/><table:table-row table:style-name="ro1"><table:table-cell table:style-name="Heading_20_1" office:value-type="string" calcext:value-type="string"><text:p>'
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers, 'coverSheetTitle') || (depth0 == null ? depth0 : lookupProperty(depth0, 'coverSheetTitle'))) == null ? alias2 : helper), (typeof helper === alias3 ? helper.call(alias1, {
    	name: 'coverSheetTitle', hash: {}, data, loc: {start: {line: 1, column: 3688}, end: {line: 1, column: 3707}},
    }) : helper)))
    + '</text:p></table:table-cell></table:table-row>';
						stack1 = ((helper = (helper = lookupProperty(helpers, 'coverSheetContents') || (depth0 == null ? depth0 : lookupProperty(depth0, 'coverSheetContents'))) == null ? alias2 : helper), (options = {
							name: 'coverSheetContents', hash: {}, fn: container.program(3, data, 0), inverse: container.noop, data, loc: {start: {line: 1, column: 3753}, end: {line: 1, column: 4556}},
						}), (typeof helper === alias3 ? helper.call(alias1, options) : helper));
						if (!lookupProperty(helpers, 'coverSheetContents')) {
							stack1 = alias4.call(depth0, stack1, options);
						}

						if (stack1 != null) {
							buffer += stack1;
						}

						return buffer + '</table:table><table:table table:name="Table_of_contents" table:style-name="ta1"><table:table-column table:style-name="co1" table:default-cell-style-name="Default"/><table:table-column table:style-name="contents_and_notes_column_2" table:default-cell-style-name="Default"/><table:table-row table:style-name="ro1"><table:table-cell table:style-name="Heading_20_1" office:value-type="string" calcext:value-type="string"><text:p>Table of contents</text:p></table:table-cell><table:table-cell/></table:table-row><table:table-row table:style-name="intro_text_last_row"><table:table-cell table:style-name="cell_intro_text" office:value-type="string" calcext:value-type="string"><text:p>This worksheet contains one table.</text:p></table:table-cell><table:table-cell/></table:table-row><table:table-row table:style-name="ro2"><table:table-cell table:style-name="ce6" office:value-type="string" calcext:value-type="string"><text:p>Table</text:p></table:table-cell><table:table-cell table:style-name="ce6" office:value-type="string" calcext:value-type="string"><text:p>Name</text:p></table:table-cell></table:table-row>';
					}, useData: true,
				},
			},
			{
				type: 'sheets',
				contents: {
					compiler: [8, '>= 4.3.0'], main(container, depth0, helpers, partials, data) {
						let helper; const alias1 = depth0 == null ? (container.nullContext || {}) : depth0; const alias2 = container.hooks.helperMissing; const alias3 = 'function'; const alias4 = container.escapeExpression; const
							lookupProperty = container.lookupProperty || function (parent, propertyName) {
								if (Object.hasOwn(parent, propertyName)) {
									return parent[propertyName];
								}

								return undefined;
							};

						return '<table:table-row table:style-name="ro2"><table:table-cell table:style-name="cell_hyperlink" office:value-type="string" calcext:value-type="string"><text:p><text:a xlink:href="#\''
    + alias4(((helper = (helper = lookupProperty(helpers, 'sheetNumber') || (depth0 == null ? depth0 : lookupProperty(depth0, 'sheetNumber'))) == null ? alias2 : helper), (typeof helper === alias3 ? helper.call(alias1, {
    	name: 'sheetNumber', hash: {}, data, loc: {start: {line: 1, column: 177}, end: {line: 1, column: 192}},
    }) : helper)))
    + '\'.A1" xlink:type="simple">Table '
    + alias4(((helper = (helper = lookupProperty(helpers, 'sheetNumber') || (depth0 == null ? depth0 : lookupProperty(depth0, 'sheetNumber'))) == null ? alias2 : helper), (typeof helper === alias3 ? helper.call(alias1, {
    	name: 'sheetNumber', hash: {}, data, loc: {start: {line: 1, column: 224}, end: {line: 1, column: 239}},
    }) : helper)))
    + '</text:a></text:p></table:table-cell><table:table-cell office:value-type="string" calcext:value-type="string"><text:p>'
    + alias4(((helper = (helper = lookupProperty(helpers, 'sheetName') || (depth0 == null ? depth0 : lookupProperty(depth0, 'sheetName'))) == null ? alias2 : helper), (typeof helper === alias3 ? helper.call(alias1, {
    	name: 'sheetName', hash: {}, data, loc: {start: {line: 1, column: 357}, end: {line: 1, column: 370}},
    }) : helper)))
    + '</text:p></table:table-cell></table:table-row>';
					}, useData: true,
				},
			},
			{
				type: 'template',
				contents: {
					1(container, depth0, helpers, partials, data) {
						let stack1; let helper; let options; const lookupProperty = container.lookupProperty || function (parent, propertyName) {
							if (Object.hasOwn(parent, propertyName)) {
								return parent[propertyName];
							}

							return undefined;
						};

						let
							buffer
  = '<table:table table:name="Notes" table:style-name="ta1"><table:table-column table:style-name="co1" table:default-cell-style-name="Default"/><table:table-column table:style-name="contents_and_notes_column_2" table:default-cell-style-name="Default"/><table:table-row table:style-name="ro1"><table:table-cell table:style-name="Heading_20_1" office:value-type="string" calcext:value-type="string"><text:p>Notes</text:p></table:table-cell><table:table-cell/></table:table-row><table:table-row table:style-name="intro_text_last_row"><table:table-cell table:style-name="cell_intro_text" office:value-type="string" calcext:value-type="string"><text:p>This worksheet contains one table.</text:p></table:table-cell><table:table-cell/></table:table-row><table:table-row table:style-name="ro2"><table:table-cell table:style-name="ce6" office:value-type="string" calcext:value-type="string"><text:p>Number</text:p></table:table-cell><table:table-cell table:style-name="ce6" office:value-type="string" calcext:value-type="string"><text:p>Note</text:p></table:table-cell></table:table-row>';
						stack1 = ((helper = (helper = lookupProperty(helpers, 'notes') || (depth0 == null ? depth0 : lookupProperty(depth0, 'notes'))) == null ? container.hooks.helperMissing : helper), (options = {
							name: 'notes', hash: {}, fn: container.program(2, data, 0), inverse: container.noop, data, loc: {start: {line: 1, column: 1100}, end: {line: 1, column: 1412}},
						}), (typeof helper === 'function' ? helper.call(depth0 == null ? (container.nullContext || {}) : depth0, options) : helper));
						if (!lookupProperty(helpers, 'notes')) {
							stack1 = container.hooks.blockHelperMissing.call(depth0, stack1, options);
						}

						if (stack1 != null) {
							buffer += stack1;
						}

						return buffer + '</table:table>';
					}, 2(container, depth0, helpers, partials, data) {
						let helper; const alias1 = depth0 == null ? (container.nullContext || {}) : depth0; const alias2 = container.hooks.helperMissing; const alias3 = 'function'; const alias4 = container.escapeExpression; const
							lookupProperty = container.lookupProperty || function (parent, propertyName) {
								if (Object.hasOwn(parent, propertyName)) {
									return parent[propertyName];
								}

								return undefined;
							};

						return '<table:table-row table:style-name="ro2"><table:table-cell office:value-type="string" calcext:value-type="string"><text:p>'
    + alias4(((helper = (helper = lookupProperty(helpers, 'name') || (depth0 == null ? depth0 : lookupProperty(depth0, 'name'))) == null ? alias2 : helper), (typeof helper === alias3 ? helper.call(alias1, {
    	name: 'name', hash: {}, data, loc: {start: {line: 1, column: 1231}, end: {line: 1, column: 1239}},
    }) : helper)))
    + '</text:p></table:table-cell><table:table-cell office:value-type="string" calcext:value-type="string"><text:p>'
    + alias4(((helper = (helper = lookupProperty(helpers, 'text') || (depth0 == null ? depth0 : lookupProperty(depth0, 'text'))) == null ? alias2 : helper), (typeof helper === alias3 ? helper.call(alias1, {
    	name: 'text', hash: {}, data, loc: {start: {line: 1, column: 1348}, end: {line: 1, column: 1356}},
    }) : helper)))
    + '</text:p></table:table-cell></table:table-row>';
					}, compiler: [8, '>= 4.3.0'], main(container, depth0, helpers, partials, data) {
						let stack1; let helper; let options; const lookupProperty = container.lookupProperty || function (parent, propertyName) {
							if (Object.hasOwn(parent, propertyName)) {
								return parent[propertyName];
							}

							return undefined;
						};

						let
							buffer
  = '</table:table>';
						stack1 = ((helper = (helper = lookupProperty(helpers, 'hasNotes') || (depth0 == null ? depth0 : lookupProperty(depth0, 'hasNotes'))) == null ? container.hooks.helperMissing : helper), (options = {
							name: 'hasNotes', hash: {}, fn: container.program(1, data, 0), inverse: container.noop, data, loc: {start: {line: 1, column: 14}, end: {line: 1, column: 1439}},
						}), (typeof helper === 'function' ? helper.call(depth0 == null ? (container.nullContext || {}) : depth0, options) : helper));
						if (!lookupProperty(helpers, 'hasNotes')) {
							stack1 = container.hooks.blockHelperMissing.call(depth0, stack1, options);
						}

						if (stack1 != null) {
							buffer += stack1;
						}

						return buffer;
					}, useData: true,
				},
			},
			{
				type: 'sheets',
				header: {
					1(container, depth0, helpers, partials, data) {
						let helper; const
							lookupProperty = container.lookupProperty || function (parent, propertyName) {
								if (Object.hasOwn(parent, propertyName)) {
									return parent[propertyName];
								}

								return undefined;
							};

						return '<table:table-column table:style-name="'
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers, 'name') || (depth0 == null ? depth0 : lookupProperty(depth0, 'name'))) == null ? container.hooks.helperMissing : helper), (typeof helper === 'function' ? helper.call(depth0 == null ? (container.nullContext || {}) : depth0, {
    	name: 'name', hash: {}, data, loc: {start: {line: 1, column: 120}, end: {line: 1, column: 128}},
    }) : helper)))
    + '" table:default-cell-style-name="Default"/>';
					}, 3(container, depth0, helpers, partials, data) {
						let stack1; let helper; let options; const alias1 = depth0 == null ? (container.nullContext || {}) : depth0; const alias2 = container.hooks.helperMissing; const alias3 = 'function'; const alias4 = container.hooks.blockHelperMissing; const lookupProperty = container.lookupProperty || function (parent, propertyName) {
							if (Object.hasOwn(parent, propertyName)) {
								return parent[propertyName];
							}

							return undefined;
						};

						let
							buffer = '';

						stack1 = ((helper = (helper = lookupProperty(helpers, 'isLastIntroRow') || (depth0 == null ? depth0 : lookupProperty(depth0, 'isLastIntroRow'))) == null ? alias2 : helper), (options = {
							name: 'isLastIntroRow', hash: {}, fn: container.program(4, data, 0), inverse: container.noop, data, loc: {start: {line: 1, column: 490}, end: {line: 1, column: 754}},
						}), (typeof helper === alias3 ? helper.call(alias1, options) : helper));
						if (!lookupProperty(helpers, 'isLastIntroRow')) {
							stack1 = alias4.call(depth0, stack1, options);
						}

						if (stack1 != null) {
							buffer += stack1;
						}

						stack1 = ((helper = (helper = lookupProperty(helpers, 'isLastIntroRow') || (depth0 == null ? depth0 : lookupProperty(depth0, 'isLastIntroRow'))) == null ? alias2 : helper), (options = {
							name: 'isLastIntroRow', hash: {}, fn: container.noop, inverse: container.program(6, data, 0), data, loc: {start: {line: 1, column: 754}, end: {line: 1, column: 1013}},
						}), (typeof helper === alias3 ? helper.call(alias1, options) : helper));
						if (!lookupProperty(helpers, 'isLastIntroRow')) {
							stack1 = alias4.call(depth0, stack1, options);
						}

						if (stack1 != null) {
							buffer += stack1;
						}

						return buffer;
					}, 4(container, depth0, helpers, partials, data) {
						let helper; const
							lookupProperty = container.lookupProperty || function (parent, propertyName) {
								if (Object.hasOwn(parent, propertyName)) {
									return parent[propertyName];
								}

								return undefined;
							};

						return '<table:table-row table:style-name="intro_text_last_row"><table:table-cell table:style-name="cell_intro_text" office:value-type="string" calcext:value-type="string"><text:p>'
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers, 'text') || (depth0 == null ? depth0 : lookupProperty(depth0, 'text'))) == null ? container.hooks.helperMissing : helper), (typeof helper === 'function' ? helper.call(depth0 == null ? (container.nullContext || {}) : depth0, {
    	name: 'text', hash: {}, data, loc: {start: {line: 1, column: 681}, end: {line: 1, column: 689}},
    }) : helper)))
    + '</text:p></table:table-cell></table:table-row>';
					}, 6(container, depth0, helpers, partials, data) {
						let helper; const
							lookupProperty = container.lookupProperty || function (parent, propertyName) {
								if (Object.hasOwn(parent, propertyName)) {
									return parent[propertyName];
								}

								return undefined;
							};

						return '<table:table-row table:style-name="intro_text_row"><table:table-cell table:style-name="cell_intro_text" office:value-type="string" calcext:value-type="string"><text:p>'
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers, 'text') || (depth0 == null ? depth0 : lookupProperty(depth0, 'text'))) == null ? container.hooks.helperMissing : helper), (typeof helper === 'function' ? helper.call(depth0 == null ? (container.nullContext || {}) : depth0, {
    	name: 'text', hash: {}, data, loc: {start: {line: 1, column: 940}, end: {line: 1, column: 948}},
    }) : helper)))
    + '</text:p></table:table-cell></table:table-row>';
					}, 8(container, depth0, helpers, partials, data) {
						let stack1; let helper; let options; const alias1 = depth0 == null ? (container.nullContext || {}) : depth0; const alias2 = container.hooks.helperMissing; const alias3 = 'function'; const alias4 = container.hooks.blockHelperMissing; const lookupProperty = container.lookupProperty || function (parent, propertyName) {
							if (Object.hasOwn(parent, propertyName)) {
								return parent[propertyName];
							}

							return undefined;
						};

						let
							buffer = '';

						stack1 = ((helper = (helper = lookupProperty(helpers, 'isNumeric') || (depth0 == null ? depth0 : lookupProperty(depth0, 'isNumeric'))) == null ? alias2 : helper), (options = {
							name: 'isNumeric', hash: {}, fn: container.program(9, data, 0), inverse: container.noop, data, loc: {start: {line: 1, column: 1079}, end: {line: 1, column: 1302}},
						}), (typeof helper === alias3 ? helper.call(alias1, options) : helper));
						if (!lookupProperty(helpers, 'isNumeric')) {
							stack1 = alias4.call(depth0, stack1, options);
						}

						if (stack1 != null) {
							buffer += stack1;
						}

						stack1 = ((helper = (helper = lookupProperty(helpers, 'isNumeric') || (depth0 == null ? depth0 : lookupProperty(depth0, 'isNumeric'))) == null ? alias2 : helper), (options = {
							name: 'isNumeric', hash: {}, fn: container.noop, inverse: container.program(12, data, 0), data, loc: {start: {line: 1, column: 1302}, end: {line: 1, column: 1501}},
						}), (typeof helper === alias3 ? helper.call(alias1, options) : helper));
						if (!lookupProperty(helpers, 'isNumeric')) {
							stack1 = alias4.call(depth0, stack1, options);
						}

						if (stack1 != null) {
							buffer += stack1;
						}

						return buffer;
					}, 9(container, depth0, helpers, partials, data) {
						let stack1; let helper; let options; const lookupProperty = container.lookupProperty || function (parent, propertyName) {
							if (Object.hasOwn(parent, propertyName)) {
								return parent[propertyName];
							}

							return undefined;
						};

						let
							buffer
  = '<table:table-cell table:style-name="right_aligned_table_heading" office:value-type="string" calcext:value-type="string">';
						stack1 = ((helper = (helper = lookupProperty(helpers, 'headingLines') || (depth0 == null ? depth0 : lookupProperty(depth0, 'headingLines'))) == null ? container.hooks.helperMissing : helper), (options = {
							name: 'headingLines', hash: {}, fn: container.program(10, data, 0), inverse: container.noop, data, loc: {start: {line: 1, column: 1213}, end: {line: 1, column: 1269}},
						}), (typeof helper === 'function' ? helper.call(depth0 == null ? (container.nullContext || {}) : depth0, options) : helper));
						if (!lookupProperty(helpers, 'headingLines')) {
							stack1 = container.hooks.blockHelperMissing.call(depth0, stack1, options);
						}

						if (stack1 != null) {
							buffer += stack1;
						}

						return buffer + '</table:table-cell>';
					}, 10(container, depth0, helpers, partials, data) {
						return '<text:p>'
    + container.escapeExpression(container.lambda(depth0, depth0))
    + '</text:p>';
					}, 12(container, depth0, helpers, partials, data) {
						let stack1; let helper; let options; const lookupProperty = container.lookupProperty || function (parent, propertyName) {
							if (Object.hasOwn(parent, propertyName)) {
								return parent[propertyName];
							}

							return undefined;
						};

						let
							buffer
  = '<table:table-cell table:style-name="ce6" office:value-type="string" calcext:value-type="string">';
						stack1 = ((helper = (helper = lookupProperty(helpers, 'headingLines') || (depth0 == null ? depth0 : lookupProperty(depth0, 'headingLines'))) == null ? container.hooks.helperMissing : helper), (options = {
							name: 'headingLines', hash: {}, fn: container.program(10, data, 0), inverse: container.noop, data, loc: {start: {line: 1, column: 1412}, end: {line: 1, column: 1468}},
						}), (typeof helper === 'function' ? helper.call(depth0 == null ? (container.nullContext || {}) : depth0, options) : helper));
						if (!lookupProperty(helpers, 'headingLines')) {
							stack1 = container.hooks.blockHelperMissing.call(depth0, stack1, options);
						}

						if (stack1 != null) {
							buffer += stack1;
						}

						return buffer + '</table:table-cell>';
					}, compiler: [8, '>= 4.3.0'], main(container, depth0, helpers, partials, data) {
						let stack1; let helper; let options; const alias1 = depth0 == null ? (container.nullContext || {}) : depth0; const alias2 = container.hooks.helperMissing; const alias3 = 'function'; const alias4 = container.escapeExpression; const alias5 = container.hooks.blockHelperMissing; const lookupProperty = container.lookupProperty || function (parent, propertyName) {
							if (Object.hasOwn(parent, propertyName)) {
								return parent[propertyName];
							}

							return undefined;
						};

						let
							buffer
  = '<table:table table:name="'
    + alias4(((helper = (helper = lookupProperty(helpers, 'sheetNumber') || (depth0 == null ? depth0 : lookupProperty(depth0, 'sheetNumber'))) == null ? alias2 : helper), (typeof helper === alias3 ? helper.call(alias1, {
    	name: 'sheetNumber', hash: {}, data, loc: {start: {line: 1, column: 25}, end: {line: 1, column: 40}},
    }) : helper)))
    + '" table:style-name="ta1">';
						stack1 = ((helper = (helper = lookupProperty(helpers, 'columnStyles') || (depth0 == null ? depth0 : lookupProperty(depth0, 'columnStyles'))) == null ? alias2 : helper), (options = {
							name: 'columnStyles', hash: {}, fn: container.program(1, data, 0), inverse: container.noop, data, loc: {start: {line: 1, column: 65}, end: {line: 1, column: 188}},
						}), (typeof helper === alias3 ? helper.call(alias1, options) : helper));
						if (!lookupProperty(helpers, 'columnStyles')) {
							stack1 = alias5.call(depth0, stack1, options);
						}

						if (stack1 != null) {
							buffer += stack1;
						}

						buffer += '<table:table-row table:style-name="ro1"><table:table-cell table:style-name="Heading_20_1" office:value-type="string" calcext:value-type="string"><text:p>Table '
    + alias4(((helper = (helper = lookupProperty(helpers, 'sheetNumber') || (depth0 == null ? depth0 : lookupProperty(depth0, 'sheetNumber'))) == null ? alias2 : helper), (typeof helper === alias3 ? helper.call(alias1, {
    	name: 'sheetNumber', hash: {}, data, loc: {start: {line: 1, column: 347}, end: {line: 1, column: 362}},
    }) : helper)))
    + ': '
    + alias4(((helper = (helper = lookupProperty(helpers, 'sheetName') || (depth0 == null ? depth0 : lookupProperty(depth0, 'sheetName'))) == null ? alias2 : helper), (typeof helper === alias3 ? helper.call(alias1, {
    	name: 'sheetName', hash: {}, data, loc: {start: {line: 1, column: 364}, end: {line: 1, column: 377}},
    }) : helper)))
    + '</text:p></table:table-cell><table:table-cell table:number-columns-repeated="2"/></table:table-row>';
						stack1 = ((helper = (helper = lookupProperty(helpers, 'introText') || (depth0 == null ? depth0 : lookupProperty(depth0, 'introText'))) == null ? alias2 : helper), (options = {
							name: 'introText', hash: {}, fn: container.program(3, data, 0), inverse: container.noop, data, loc: {start: {line: 1, column: 476}, end: {line: 1, column: 1027}},
						}), (typeof helper === alias3 ? helper.call(alias1, options) : helper));
						if (!lookupProperty(helpers, 'introText')) {
							stack1 = alias5.call(depth0, stack1, options);
						}

						if (stack1 != null) {
							buffer += stack1;
						}

						buffer += '<table:table-row table:style-name="ro2">';
						stack1 = ((helper = (helper = lookupProperty(helpers, 'columns') || (depth0 == null ? depth0 : lookupProperty(depth0, 'columns'))) == null ? alias2 : helper), (options = {
							name: 'columns', hash: {}, fn: container.program(8, data, 0), inverse: container.noop, data, loc: {start: {line: 1, column: 1067}, end: {line: 1, column: 1513}},
						}), (typeof helper === alias3 ? helper.call(alias1, options) : helper));
						if (!lookupProperty(helpers, 'columns')) {
							stack1 = alias5.call(depth0, stack1, options);
						}

						if (stack1 != null) {
							buffer += stack1;
						}

						return buffer + '</table:table-row>';
					}, useData: true,
				},
				rows: {
					1(container, depth0, helpers, partials, data) {
						let stack1; let helper; let options; const lookupProperty = container.lookupProperty || function (parent, propertyName) {
							if (Object.hasOwn(parent, propertyName)) {
								return parent[propertyName];
							}

							return undefined;
						};

						let
							buffer
  = '<table:table-row table:style-name="ro2">';
						stack1 = ((helper = (helper = lookupProperty(helpers, 'cellsInRow') || (depth0 == null ? depth0 : lookupProperty(depth0, 'cellsInRow'))) == null ? container.hooks.helperMissing : helper), (options = {
							name: 'cellsInRow', hash: {}, fn: container.program(2, data, 0), inverse: container.noop, data, loc: {start: {line: 1, column: 49}, end: {line: 1, column: 530}},
						}), (typeof helper === 'function' ? helper.call(depth0 == null ? (container.nullContext || {}) : depth0, options) : helper));
						if (!lookupProperty(helpers, 'cellsInRow')) {
							stack1 = container.hooks.blockHelperMissing.call(depth0, stack1, options);
						}

						if (stack1 != null) {
							buffer += stack1;
						}

						return buffer + '</table:table-row>';
					}, 2(container, depth0, helpers, partials, data) {
						let stack1; let helper; let options; const alias1 = depth0 == null ? (container.nullContext || {}) : depth0; const alias2 = container.hooks.helperMissing; const alias3 = 'function'; const alias4 = container.hooks.blockHelperMissing; const lookupProperty = container.lookupProperty || function (parent, propertyName) {
							if (Object.hasOwn(parent, propertyName)) {
								return parent[propertyName];
							}

							return undefined;
						};

						let
							buffer = '';

						stack1 = ((helper = (helper = lookupProperty(helpers, 'isText') || (depth0 == null ? depth0 : lookupProperty(depth0, 'isText'))) == null ? alias2 : helper), (options = {
							name: 'isText', hash: {}, fn: container.program(3, data, 0), inverse: container.noop, data, loc: {start: {line: 1, column: 64}, end: {line: 1, column: 211}},
						}), (typeof helper === alias3 ? helper.call(alias1, options) : helper));
						if (!lookupProperty(helpers, 'isText')) {
							stack1 = alias4.call(depth0, stack1, options);
						}

						if (stack1 != null) {
							buffer += stack1;
						}

						stack1 = ((helper = (helper = lookupProperty(helpers, 'isNumeric') || (depth0 == null ? depth0 : lookupProperty(depth0, 'isNumeric'))) == null ? alias2 : helper), (options = {
							name: 'isNumeric', hash: {}, fn: container.program(5, data, 0), inverse: container.noop, data, loc: {start: {line: 1, column: 211}, end: {line: 1, column: 424}},
						}), (typeof helper === alias3 ? helper.call(alias1, options) : helper));
						if (!lookupProperty(helpers, 'isNumeric')) {
							stack1 = alias4.call(depth0, stack1, options);
						}

						if (stack1 != null) {
							buffer += stack1;
						}

						stack1 = ((helper = (helper = lookupProperty(helpers, 'isEmptyNumeric') || (depth0 == null ? depth0 : lookupProperty(depth0, 'isEmptyNumeric'))) == null ? alias2 : helper), (options = {
							name: 'isEmptyNumeric', hash: {}, fn: container.program(7, data, 0), inverse: container.noop, data, loc: {start: {line: 1, column: 424}, end: {line: 1, column: 515}},
						}), (typeof helper === alias3 ? helper.call(alias1, options) : helper));
						if (!lookupProperty(helpers, 'isEmptyNumeric')) {
							stack1 = alias4.call(depth0, stack1, options);
						}

						if (stack1 != null) {
							buffer += stack1;
						}

						return buffer;
					}, 3(container, depth0, helpers, partials, data) {
						let helper; const
							lookupProperty = container.lookupProperty || function (parent, propertyName) {
								if (Object.hasOwn(parent, propertyName)) {
									return parent[propertyName];
								}

								return undefined;
							};

						return '<table:table-cell office:value-type="string" calcext:value-type="string"><text:p>'
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers, 'displayValue') || (depth0 == null ? depth0 : lookupProperty(depth0, 'displayValue'))) == null ? container.hooks.helperMissing : helper), (typeof helper === 'function' ? helper.call(depth0 == null ? (container.nullContext || {}) : depth0, {
    	name: 'displayValue', hash: {}, data, loc: {start: {line: 1, column: 156}, end: {line: 1, column: 172}},
    }) : helper)))
    + '</text:p></table:table-cell>';
					}, 5(container, depth0, helpers, partials, data) {
						let helper; const alias1 = depth0 == null ? (container.nullContext || {}) : depth0; const alias2 = container.hooks.helperMissing; const alias3 = 'function'; const alias4 = container.escapeExpression; const
							lookupProperty = container.lookupProperty || function (parent, propertyName) {
								if (Object.hasOwn(parent, propertyName)) {
									return parent[propertyName];
								}

								return undefined;
							};

						return '<table:table-cell table:style-name="cell_'
    + alias4(((helper = (helper = lookupProperty(helpers, 'style') || (depth0 == null ? depth0 : lookupProperty(depth0, 'style'))) == null ? alias2 : helper), (typeof helper === alias3 ? helper.call(alias1, {
    	name: 'style', hash: {}, data, loc: {start: {line: 1, column: 266}, end: {line: 1, column: 275}},
    }) : helper)))
    + '" office:value-type="float" office:value="'
    + alias4(((helper = (helper = lookupProperty(helpers, 'rawValue') || (depth0 == null ? depth0 : lookupProperty(depth0, 'rawValue'))) == null ? alias2 : helper), (typeof helper === alias3 ? helper.call(alias1, {
    	name: 'rawValue', hash: {}, data, loc: {start: {line: 1, column: 317}, end: {line: 1, column: 329}},
    }) : helper)))
    + '" calcext:value-type="float"><text:p>'
    + alias4(((helper = (helper = lookupProperty(helpers, 'displayValue') || (depth0 == null ? depth0 : lookupProperty(depth0, 'displayValue'))) == null ? alias2 : helper), (typeof helper === alias3 ? helper.call(alias1, {
    	name: 'displayValue', hash: {}, data, loc: {start: {line: 1, column: 366}, end: {line: 1, column: 382}},
    }) : helper)))
    + '</text:p></table:table-cell>';
					}, 7(container, depth0, helpers, partials, data) {
						let helper; const
							lookupProperty = container.lookupProperty || function (parent, propertyName) {
								if (Object.hasOwn(parent, propertyName)) {
									return parent[propertyName];
								}

								return undefined;
							};

						return '<table:table-cell table:style-name="cell_'
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers, 'style') || (depth0 == null ? depth0 : lookupProperty(depth0, 'style'))) == null ? container.hooks.helperMissing : helper), (typeof helper === 'function' ? helper.call(depth0 == null ? (container.nullContext || {}) : depth0, {
    	name: 'style', hash: {}, data, loc: {start: {line: 1, column: 484}, end: {line: 1, column: 493}},
    }) : helper)))
    + '"/>';
					}, compiler: [8, '>= 4.3.0'], main(container, depth0, helpers, partials, data) {
						let stack1; let helper; let options; const
							lookupProperty = container.lookupProperty || function (parent, propertyName) {
								if (Object.hasOwn(parent, propertyName)) {
									return parent[propertyName];
								}

								return undefined;
							};

						stack1 = ((helper = (helper = lookupProperty(helpers, 'rows') || (depth0 == null ? depth0 : lookupProperty(depth0, 'rows'))) == null ? container.hooks.helperMissing : helper), (options = {
							name: 'rows', hash: {}, fn: container.program(1, data, 0), inverse: container.noop, data, loc: {start: {line: 1, column: 0}, end: {line: 1, column: 557}},
						}), (typeof helper === 'function' ? helper.call(depth0 == null ? (container.nullContext || {}) : depth0, options) : helper));
						if (!lookupProperty(helpers, 'rows')) {
							stack1 = container.hooks.blockHelperMissing.call(depth0, stack1, options);
						}

						if (stack1 == null) {
							return '';
						}

						return stack1;
					}, useData: true,
				},
				footer: {
					compiler: [8, '>= 4.3.0'], main(container, depth0, helpers, partials, data) {
						return '</table:table>';
					}, useData: true,
				},
			},
			{
				type: 'template',
				contents: {
					1(container, depth0, helpers, partials, data) {
						let helper; const alias1 = depth0 == null ? (container.nullContext || {}) : depth0; const alias2 = container.hooks.helperMissing; const alias3 = 'function'; const alias4 = container.escapeExpression; const
							lookupProperty = container.lookupProperty || function (parent, propertyName) {
								if (Object.hasOwn(parent, propertyName)) {
									return parent[propertyName];
								}

								return undefined;
							};

						return '<table:database-range table:name="notes_table" table:target-range-address="\'Notes\'.'
    + alias4(((helper = (helper = lookupProperty(helpers, 'firstNotesTableCell') || (depth0 == null ? depth0 : lookupProperty(depth0, 'firstNotesTableCell'))) == null ? alias2 : helper), (typeof helper === alias3 ? helper.call(alias1, {
    	name: 'firstNotesTableCell', hash: {}, data, loc: {start: {line: 1, column: 370}, end: {line: 1, column: 393}},
    }) : helper)))
    + ':\'Notes\'.'
    + alias4(((helper = (helper = lookupProperty(helpers, 'lastNotesTableCell') || (depth0 == null ? depth0 : lookupProperty(depth0, 'lastNotesTableCell'))) == null ? alias2 : helper), (typeof helper === alias3 ? helper.call(alias1, {
    	name: 'lastNotesTableCell', hash: {}, data, loc: {start: {line: 1, column: 402}, end: {line: 1, column: 424}},
    }) : helper)))
    + '" table:on-update-keep-styles="true" table:on-update-keep-size="false"/>';
					}, compiler: [8, '>= 4.3.0'], main(container, depth0, helpers, partials, data) {
						let stack1; let helper; let options; const alias1 = depth0 == null ? (container.nullContext || {}) : depth0; const alias2 = container.hooks.helperMissing; const alias3 = 'function'; const alias4 = container.escapeExpression; const lookupProperty = container.lookupProperty || function (parent, propertyName) {
							if (Object.hasOwn(parent, propertyName)) {
								return parent[propertyName];
							}

							return undefined;
						};

						let
							buffer
  = '<table:named-expressions/><table:database-ranges><table:database-range table:name="table_of_contents" table:target-range-address="\'Table_of_contents\'.'
    + alias4(((helper = (helper = lookupProperty(helpers, 'firstTocCell') || (depth0 == null ? depth0 : lookupProperty(depth0, 'firstTocCell'))) == null ? alias2 : helper), (typeof helper === alias3 ? helper.call(alias1, {
    	name: 'firstTocCell', hash: {}, data, loc: {start: {line: 1, column: 150}, end: {line: 1, column: 166}},
    }) : helper)))
    + ':\'Table_of_contents\'.'
    + alias4(((helper = (helper = lookupProperty(helpers, 'lastTocCell') || (depth0 == null ? depth0 : lookupProperty(depth0, 'lastTocCell'))) == null ? alias2 : helper), (typeof helper === alias3 ? helper.call(alias1, {
    	name: 'lastTocCell', hash: {}, data, loc: {start: {line: 1, column: 187}, end: {line: 1, column: 202}},
    }) : helper)))
    + '" table:on-update-keep-styles="true" table:on-update-keep-size="false"/>';
						stack1 = ((helper = (helper = lookupProperty(helpers, 'hasNotes') || (depth0 == null ? depth0 : lookupProperty(depth0, 'hasNotes'))) == null ? alias2 : helper), (options = {
							name: 'hasNotes', hash: {}, fn: container.program(1, data, 0), inverse: container.noop, data, loc: {start: {line: 1, column: 274}, end: {line: 1, column: 509}},
						}), (typeof helper === alias3 ? helper.call(alias1, options) : helper));
						if (!lookupProperty(helpers, 'hasNotes')) {
							stack1 = container.hooks.blockHelperMissing.call(depth0, stack1, options);
						}

						if (stack1 != null) {
							buffer += stack1;
						}

						return buffer;
					}, useData: true,
				},
			},
			{
				type: 'sheets',
				contents: {
					compiler: [8, '>= 4.3.0'], main(container, depth0, helpers, partials, data) {
						let helper; const alias1 = depth0 == null ? (container.nullContext || {}) : depth0; const alias2 = container.hooks.helperMissing; const alias3 = 'function'; const alias4 = container.escapeExpression; const
							lookupProperty = container.lookupProperty || function (parent, propertyName) {
								if (Object.hasOwn(parent, propertyName)) {
									return parent[propertyName];
								}

								return undefined;
							};

						return '<table:database-range table:name="'
    + alias4(((helper = (helper = lookupProperty(helpers, 'tableName') || (depth0 == null ? depth0 : lookupProperty(depth0, 'tableName'))) == null ? alias2 : helper), (typeof helper === alias3 ? helper.call(alias1, {
    	name: 'tableName', hash: {}, data, loc: {start: {line: 1, column: 34}, end: {line: 1, column: 47}},
    }) : helper)))
    + '" table:target-range-address="\''
    + alias4(((helper = (helper = lookupProperty(helpers, 'sheetNumber') || (depth0 == null ? depth0 : lookupProperty(depth0, 'sheetNumber'))) == null ? alias2 : helper), (typeof helper === alias3 ? helper.call(alias1, {
    	name: 'sheetNumber', hash: {}, data, loc: {start: {line: 1, column: 78}, end: {line: 1, column: 93}},
    }) : helper)))
    + '\'.'
    + alias4(((helper = (helper = lookupProperty(helpers, 'firstTableCell') || (depth0 == null ? depth0 : lookupProperty(depth0, 'firstTableCell'))) == null ? alias2 : helper), (typeof helper === alias3 ? helper.call(alias1, {
    	name: 'firstTableCell', hash: {}, data, loc: {start: {line: 1, column: 95}, end: {line: 1, column: 113}},
    }) : helper)))
    + ':\''
    + alias4(((helper = (helper = lookupProperty(helpers, 'sheetNumber') || (depth0 == null ? depth0 : lookupProperty(depth0, 'sheetNumber'))) == null ? alias2 : helper), (typeof helper === alias3 ? helper.call(alias1, {
    	name: 'sheetNumber', hash: {}, data, loc: {start: {line: 1, column: 115}, end: {line: 1, column: 130}},
    }) : helper)))
    + '\'.'
    + alias4(((helper = (helper = lookupProperty(helpers, 'lastTableCell') || (depth0 == null ? depth0 : lookupProperty(depth0, 'lastTableCell'))) == null ? alias2 : helper), (typeof helper === alias3 ? helper.call(alias1, {
    	name: 'lastTableCell', hash: {}, data, loc: {start: {line: 1, column: 132}, end: {line: 1, column: 149}},
    }) : helper)))
    + '" table:on-update-keep-styles="true" table:on-update-keep-size="false"/>';
					}, useData: true,
				},
			},
			{
				type: 'template',
				contents: {
					compiler: [8, '>= 4.3.0'], main(container, depth0, helpers, partials, data) {
						return '</table:database-ranges></office:spreadsheet></office:body></office:document-content>';
					}, useData: true,
				},
			},
		],
		type: 'chunks',
	},
	{
		filename: 'meta.xml',
		contents: {
			compiler: [8, '>= 4.3.0'], main(container, depth0, helpers, partials, data) {
				let helper; const
					lookupProperty = container.lookupProperty || function (parent, propertyName) {
						if (Object.hasOwn(parent, propertyName)) {
							return parent[propertyName];
						}

						return undefined;
					};

				return '<?xml version="1.0" encoding="UTF-8"?><office:document-meta xmlns:grddl="http://www.w3.org/2003/g/data-view#" xmlns:meta="urn:oasis:names:tc:opendocument:xmlns:meta:1.0" xmlns:ooo="http://openoffice.org/2004/office" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" office:version="1.3"><office:meta><meta:creation-date>2023-09-21T12:53:29.924750298</meta:creation-date><dc:date>2023-10-11T10:07:17.854771739</dc:date><meta:editing-duration>PT12M36S</meta:editing-duration><meta:editing-cycles>14</meta:editing-cycles><meta:generator>LibreOffice/7.0.6.2$MacOSX_X86_64 LibreOffice_project/144abb84a525d8e30c9dbbefa69cbbf2d8d4ae3b</meta:generator><meta:document-statistic meta:table-count="'
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers, 'tableCount') || (depth0 == null ? depth0 : lookupProperty(depth0, 'tableCount'))) == null ? container.hooks.helperMissing : helper), (typeof helper === 'function' ? helper.call(depth0 == null ? (container.nullContext || {}) : depth0, {
    	name: 'tableCount', hash: {}, data, loc: {start: {line: 1, column: 789}, end: {line: 1, column: 803}},
    }) : helper)))
    + '" meta:object-count="0"/></office:meta></office:document-meta>';
			}, useData: true,
		},
		type: 'template',
	},
	{
		filename: 'styles.xml',
		contents: '<?xml version="1.0" encoding="UTF-8"?><office:document-styles xmlns:presentation="urn:oasis:names:tc:opendocument:xmlns:presentation:1.0" xmlns:css3t="http://www.w3.org/TR/css3-text/" xmlns:grddl="http://www.w3.org/2003/g/data-view#" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:dom="http://www.w3.org/2001/xml-events" xmlns:script="urn:oasis:names:tc:opendocument:xmlns:script:1.0" xmlns:form="urn:oasis:names:tc:opendocument:xmlns:form:1.0" xmlns:math="http://www.w3.org/1998/Math/MathML" xmlns:number="urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0" xmlns:field="urn:openoffice:names:experimental:ooo-ms-interop:xmlns:field:1.0" xmlns:meta="urn:oasis:names:tc:opendocument:xmlns:meta:1.0" xmlns:loext="urn:org:documentfoundation:names:experimental:office:xmlns:loext:1.0" xmlns:table="urn:oasis:names:tc:opendocument:xmlns:table:1.0" xmlns:chart="urn:oasis:names:tc:opendocument:xmlns:chart:1.0" xmlns:tableooo="http://openoffice.org/2009/table" xmlns:draw="urn:oasis:names:tc:opendocument:xmlns:drawing:1.0" xmlns:rpt="http://openoffice.org/2005/report" xmlns:dr3d="urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0" xmlns:of="urn:oasis:names:tc:opendocument:xmlns:of:1.2" xmlns:text="urn:oasis:names:tc:opendocument:xmlns:text:1.0" xmlns:style="urn:oasis:names:tc:opendocument:xmlns:style:1.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:calcext="urn:org:documentfoundation:names:experimental:calc:xmlns:calcext:1.0" xmlns:oooc="http://openoffice.org/2004/calc" xmlns:drawooo="http://openoffice.org/2010/draw" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:ooo="http://openoffice.org/2004/office" xmlns:ooow="http://openoffice.org/2004/writer" xmlns:fo="urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0" xmlns:svg="urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0" xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" office:version="1.3"><office:font-face-decls><style:font-face style:name="Arial" svg:font-family="Arial" style:font-adornments="Regular" style:font-family-generic="swiss" style:font-pitch="variable"/><style:font-face style:name="Liberation Sans" svg:font-family="\'Liberation Sans\'" style:font-family-generic="swiss" style:font-pitch="variable"/><style:font-face style:name="Arial Unicode MS" svg:font-family="\'Arial Unicode MS\'" style:font-family-generic="system" style:font-pitch="variable"/><style:font-face style:name="PingFang SC" svg:font-family="\'PingFang SC\'" style:font-family-generic="system" style:font-pitch="variable"/></office:font-face-decls><office:styles><style:default-style style:family="table-cell"><style:paragraph-properties style:tab-stop-distance="1.25cm"/><style:text-properties style:font-name="Liberation Sans" fo:language="en" fo:country="GB" style:font-name-asian="PingFang SC" style:language-asian="zh" style:country-asian="CN" style:font-name-complex="Arial Unicode MS" style:language-complex="hi" style:country-complex="IN"/></style:default-style><number:number-style style:name="N111"><number:number number:decimal-places="1" number:min-decimal-places="1" number:min-integer-digits="1"/></number:number-style><number:number-style style:name="N112"><number:number number:decimal-places="2" number:min-decimal-places="2" number:min-integer-digits="2"/></number:number-style><number:number-style style:name="number_with_commas"><number:number number:decimal-places="0" number:min-decimal-places="0" number:min-integer-digits="1" number:grouping="true"/></number:number-style><style:style style:name="Default" style:family="table-cell"><style:text-properties style:font-name="Arial" fo:font-family="Arial" style:font-style-name="Regular" style:font-family-generic="swiss" style:font-pitch="variable" fo:font-size="12pt"/></style:style><style:style style:name="Heading" style:family="table-cell" style:parent-style-name="Default"><style:text-properties fo:color="#000000" fo:font-size="24pt" fo:font-style="normal" fo:font-weight="bold"/></style:style><style:style style:name="Heading_20_1" style:display-name="Heading 1" style:family="table-cell" style:parent-style-name="Heading"><style:text-properties fo:color="#000000" fo:font-size="18pt" fo:font-style="normal" fo:font-weight="bold" style:font-weight-asian="bold" style:font-weight-complex="bold"/></style:style><style:style style:name="Heading_20_2" style:display-name="Heading 2" style:family="table-cell" style:parent-style-name="Heading"><style:text-properties fo:color="#000000" fo:font-size="14pt" fo:font-style="normal" fo:font-weight="bold" style:font-weight-asian="bold" style:font-weight-complex="bold"/></style:style><style:style style:name="Text" style:family="table-cell" style:parent-style-name="Default"/><style:style style:name="Note" style:family="table-cell" style:parent-style-name="Text"><style:table-cell-properties fo:background-color="#ffffcc" style:diagonal-bl-tr="none" style:diagonal-tl-br="none" fo:border="0.74pt solid #808080"/><style:text-properties fo:color="#333333" fo:font-size="10pt" fo:font-style="normal" fo:font-weight="normal"/></style:style><style:style style:name="Footnote" style:family="table-cell" style:parent-style-name="Text"><style:text-properties fo:color="#808080" fo:font-size="10pt" fo:font-style="italic" fo:font-weight="normal"/></style:style><style:style style:name="Hyperlink" style:family="table-cell" style:parent-style-name="Text"><style:text-properties fo:color="#0000ee" fo:font-size="12pt" fo:font-style="normal" style:text-underline-style="solid" style:text-underline-width="auto" style:text-underline-color="#0000ee" fo:font-weight="normal"/></style:style><style:style style:name="Status" style:family="table-cell" style:parent-style-name="Default"/><style:style style:name="Good" style:family="table-cell" style:parent-style-name="Status"><style:table-cell-properties fo:background-color="#ccffcc"/><style:text-properties fo:color="#006600" fo:font-size="10pt" fo:font-style="normal" fo:font-weight="normal"/></style:style><style:style style:name="Neutral" style:family="table-cell" style:parent-style-name="Status"><style:table-cell-properties fo:background-color="#ffffcc"/><style:text-properties fo:color="#996600" fo:font-size="10pt" fo:font-style="normal" fo:font-weight="normal"/></style:style><style:style style:name="Bad" style:family="table-cell" style:parent-style-name="Status"><style:table-cell-properties fo:background-color="#ffcccc"/><style:text-properties fo:color="#cc0000" fo:font-size="10pt" fo:font-style="normal" fo:font-weight="normal"/></style:style><style:style style:name="Warning" style:family="table-cell" style:parent-style-name="Status"><style:text-properties fo:color="#cc0000" fo:font-size="10pt" fo:font-style="normal" fo:font-weight="normal"/></style:style><style:style style:name="Error" style:family="table-cell" style:parent-style-name="Status"><style:table-cell-properties fo:background-color="#cc0000"/><style:text-properties fo:color="#ffffff" fo:font-size="10pt" fo:font-style="normal" fo:font-weight="bold"/></style:style><style:style style:name="Accent" style:family="table-cell" style:parent-style-name="Default"><style:text-properties fo:color="#000000" fo:font-size="10pt" fo:font-style="normal" fo:font-weight="bold"/></style:style><style:style style:name="Accent_20_1" style:display-name="Accent 1" style:family="table-cell" style:parent-style-name="Accent"><style:table-cell-properties fo:background-color="#000000"/><style:text-properties fo:color="#ffffff" fo:font-size="10pt" fo:font-style="normal" fo:font-weight="normal"/></style:style><style:style style:name="Accent_20_2" style:display-name="Accent 2" style:family="table-cell" style:parent-style-name="Accent"><style:table-cell-properties fo:background-color="#808080"/><style:text-properties fo:color="#ffffff" fo:font-size="10pt" fo:font-style="normal" fo:font-weight="normal"/></style:style><style:style style:name="Accent_20_3" style:display-name="Accent 3" style:family="table-cell" style:parent-style-name="Accent"><style:table-cell-properties fo:background-color="#dddddd"/></style:style><style:style style:name="Result" style:family="table-cell" style:parent-style-name="Default"><style:text-properties fo:color="#000000" fo:font-size="10pt" fo:font-style="italic" style:text-underline-style="solid" style:text-underline-width="auto" style:text-underline-color="#000000" fo:font-weight="bold"/></style:style></office:styles><office:automatic-styles><style:page-layout style:name="Mpm1"><style:page-layout-properties style:writing-mode="lr-tb"/><style:header-style><style:header-footer-properties fo:min-height="0.75cm" fo:margin-left="0cm" fo:margin-right="0cm" fo:margin-bottom="0.25cm"/></style:header-style><style:footer-style><style:header-footer-properties fo:min-height="0.75cm" fo:margin-left="0cm" fo:margin-right="0cm" fo:margin-top="0.25cm"/></style:footer-style></style:page-layout><style:page-layout style:name="Mpm2"><style:page-layout-properties style:writing-mode="lr-tb"/><style:header-style><style:header-footer-properties fo:min-height="0.75cm" fo:margin-left="0cm" fo:margin-right="0cm" fo:margin-bottom="0.25cm" fo:border="2.49pt solid #000000" fo:padding="0.018cm" fo:background-color="#c0c0c0"><style:background-image/></style:header-footer-properties></style:header-style><style:footer-style><style:header-footer-properties fo:min-height="0.75cm" fo:margin-left="0cm" fo:margin-right="0cm" fo:margin-top="0.25cm" fo:border="2.49pt solid #000000" fo:padding="0.018cm" fo:background-color="#c0c0c0"><style:background-image/></style:header-footer-properties></style:footer-style></style:page-layout></office:automatic-styles><office:master-styles><style:master-page style:name="Default" style:page-layout-name="Mpm1"><style:header><text:p><text:sheet-name>???</text:sheet-name></text:p></style:header><style:header-left style:display="false"/><style:footer><text:p>Page <text:page-number>1</text:page-number></text:p></style:footer><style:footer-left style:display="false"/></style:master-page><style:master-page style:name="Report" style:page-layout-name="Mpm2"><style:header><style:region-left><text:p><text:sheet-name>???</text:sheet-name><text:s/>(<text:title>???</text:title>)</text:p></style:region-left><style:region-right><text:p><text:date style:data-style-name="N2" text:date-value="2023-10-11">00/00/0000</text:date>, <text:time style:data-style-name="N2" text:time-value="10:06:35.023372525">00:00:00</text:time></text:p></style:region-right></style:header><style:header-left style:display="false"/><style:footer><text:p>Page <text:page-number>1</text:page-number><text:s/>/ <text:page-count>99</text:page-count></text:p></style:footer><style:footer-left style:display="false"/></style:master-page></office:master-styles></office:document-styles>',
		type: 'string',
	},
];
