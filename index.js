

(function(a, b, c) {
  /* node_modules/kit/inc/core/defs.sibilant:53:9 */

  return foo(this);
}).bind(this);


;

;
var Descriptions = {  };
var R = require("ramda");
var fmap = R.curry(((f, a) => {
	
  return a.map(f);

}));
var is = { 
  string( v ){ 
    
      return typeof v === "string";
    
   }
 };
is.empty__QUERY = (function is$empty__QUERY$(value) {
  /* is.empty? node_modules/kit/inc/core/fp.sibilant:12:0 */

  return 0 === value.length;
});
var athrow = (function athrow$(errType, message) {
  /* athrow node_modules/kit/inc/core/fp.sibilant:14:0 */

  return (() => {
  	
    return (new errType(message));
  
  });
});
var getValueOf = (function getValueOf$(o) {
  /* get-value-of node_modules/kit/inc/core/fp.sibilant:17:0 */

  return o.getValue();
});
var { 
  create,
  extend,
  mixin,
  conditional,
  cond,
  partiallyApplyAfter
 } = require("kit/js/util");
var Interface = {  };
mixin({ 
  _symbols:{  },
  _types:{  },
  init( name = this.name,_obj = this._obj,_types = {  },_symbols = {  } ){ 
    
      this.name = name;this._obj = _obj;this._types = _types;this._symbols = _symbols;
      return this;
    
   }
 }, Interface);
Interface.define = (function Interface$define$(name = this.name, _obj = this._obj, _types = this._types, _symbols = this._symbols, _shares = (_obj.borrows || _obj.shares || []), _ext = (_obj.extend || this), _build = _obj.build) {
  /* Interface.define node_modules/kit/inc/core/function-expressions.sibilant:30:8 */

  return (function() {
    if (name in _symbols) {
      return mixin(_obj, _types[_symbols[name]]);
    } else {
      return Interface._construct(name, _obj, _ext, _shares, _symbols, _types, _build);
    }
  }).call(this);
});
Interface._construct = (function Interface$_construct$(name = this.name, _obj = this._obj, _ext = this._ext, _shares = this._shares, _symbols = this._symbols, _types = this._types, _build = this._build) {
  /* Interface.*construct node_modules/kit/inc/core/function-expressions.sibilant:30:8 */

  return (function(proto) {
    /* node_modules/kit/inc/macros.sibilant:160:9 */
  
    proto.construct = (function proto$construct$() {
      /* proto.construct index.sibilant:35:11 */
    
      return Object.create(proto).init(...arguments);
    });
    Interface.init.call(proto);
    _symbols[name] = proto.symbol;
    _types[proto.symbol] = proto;
    (function() {
      if (proto.build) {
        return proto.build();
      }
    }).call(this);
    proto;
    return proto;
  })(extend(_ext, mixin([ { 
    name,
    symbol:Symbol(name),
    define:Interface.define,
    proto:_ext,
    _construct:Interface._construct
   }, ..._shares ], _obj)));
});
exports.Interface = Interface;