"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var Footer = (function (Component) {
	function Footer() {
		_classCallCheck(this, Footer);

		if (Component != null) {
			Component.apply(this, arguments);
		}
	}

	_inherits(Footer, Component);

	_prototypeProperties(Footer, null, {
		render: {
			value: function render() {
				return React.createElement(
					"footer",
					null,
					React.createElement(
						"div",
						{ id: "copyrights" },
						React.createElement(
							"div",
							{ className: "container clearfix" },
							React.createElement(
								"div",
								{ className: "col_half" },
								"Copyrights © 2014 All Rights Reserved by Canvas Inc.",
								React.createElement("br", null),
								React.createElement(
									"div",
									{ className: "copyright-links" },
									React.createElement(
										"a",
										{ href: "#" },
										"Terms of Use"
									),
									" / ",
									React.createElement(
										"a",
										{ href: "#" },
										"Privacy Policy"
									)
								)
							),
							React.createElement(
								"div",
								{ className: "col_half col_last tright" },
								React.createElement(
									"div",
									{ className: "fright clearfix" },
									React.createElement(
										"a",
										{ href: "#", className: "social-icon si-small si-borderless si-facebook" },
										React.createElement("i", { className: "icon-facebook" }),
										React.createElement("i", { className: "icon-facebook" })
									),
									React.createElement(
										"a",
										{ href: "#", className: "social-icon si-small si-borderless si-twitter" },
										React.createElement("i", { className: "icon-twitter" }),
										React.createElement("i", { className: "icon-twitter" })
									),
									React.createElement(
										"a",
										{ href: "#", className: "social-icon si-small si-borderless si-gplus" },
										React.createElement("i", { className: "icon-gplus" }),
										React.createElement("i", { className: "icon-gplus" })
									),
									React.createElement(
										"a",
										{ href: "#", className: "social-icon si-small si-borderless si-github" },
										React.createElement("i", { className: "icon-github" }),
										React.createElement("i", { className: "icon-github" })
									),
									React.createElement(
										"a",
										{ href: "#", className: "social-icon si-small si-borderless si-linkedin" },
										React.createElement("i", { className: "icon-linkedin" }),
										React.createElement("i", { className: "icon-linkedin" })
									)
								),
								React.createElement("div", { className: "clear" }),
								React.createElement("i", { className: "icon-envelope2" }),
								" info@canvas.com ",
								React.createElement(
									"span",
									{ className: "middot" },
									"·"
								),
								" ",
								React.createElement("i", { className: "icon-headphones" }),
								" +91-11-6541-6369 ",
								React.createElement(
									"span",
									{ className: "middot" },
									"·"
								),
								" ",
								React.createElement("i", { className: "icon-skype2" }),
								" CanvasOnSkype"
							)
						)
					)
				);
			},
			writable: true,
			configurable: true
		}
	});

	return Footer;
})(Component);

module.exports = Footer;