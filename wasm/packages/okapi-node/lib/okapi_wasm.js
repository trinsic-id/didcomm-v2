let imports = {};
imports['__wbindgen_placeholder__'] = module.exports;
let wasm;
const { TextDecoder } = require(String.raw`util`);

const heap = new Array(32).fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

let heap_next = heap.length;

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}
/**
* @param {Uint8Array} request
* @returns {Uint8Array}
*/
module.exports.didcomm_pack = function(request) {
    var ret = wasm.didcomm_pack(addHeapObject(request));
    return takeObject(ret);
};

/**
* @param {Uint8Array} request
* @returns {Uint8Array}
*/
module.exports.didcomm_unpack = function(request) {
    var ret = wasm.didcomm_unpack(addHeapObject(request));
    return takeObject(ret);
};

/**
* @param {Uint8Array} request
* @returns {Uint8Array}
*/
module.exports.didcomm_sign = function(request) {
    var ret = wasm.didcomm_sign(addHeapObject(request));
    return takeObject(ret);
};

/**
* @param {Uint8Array} request
* @returns {Uint8Array}
*/
module.exports.didcomm_verify = function(request) {
    var ret = wasm.didcomm_verify(addHeapObject(request));
    return takeObject(ret);
};

/**
* @param {Uint8Array} request
* @returns {Uint8Array}
*/
module.exports.didkey_generate = function(request) {
    var ret = wasm.didkey_generate(addHeapObject(request));
    return takeObject(ret);
};

/**
* @param {Uint8Array} request
* @returns {Uint8Array}
*/
module.exports.didkey_resolve = function(request) {
    var ret = wasm.didkey_resolve(addHeapObject(request));
    return takeObject(ret);
};

/**
* @param {Uint8Array} request
* @returns {Uint8Array}
*/
module.exports.ldproofs_create_proof = function(request) {
    var ret = wasm.ldproofs_create_proof(addHeapObject(request));
    return takeObject(ret);
};

/**
* @param {Uint8Array} request
* @returns {Uint8Array}
*/
module.exports.ldproofs_verify_proof = function(request) {
    var ret = wasm.ldproofs_create_proof(addHeapObject(request));
    return takeObject(ret);
};

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        wasm.__wbindgen_exn_store(addHeapObject(e));
    }
}

function getArrayU8FromWasm0(ptr, len) {
    return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);
}

module.exports.__wbindgen_object_drop_ref = function(arg0) {
    takeObject(arg0);
};

module.exports.__wbindgen_string_new = function(arg0, arg1) {
    var ret = getStringFromWasm0(arg0, arg1);
    return addHeapObject(ret);
};

module.exports.__wbg_getRandomValues_98117e9a7e993920 = function() { return handleError(function (arg0, arg1) {
    getObject(arg0).getRandomValues(getObject(arg1));
}, arguments) };

module.exports.__wbg_randomFillSync_64cc7d048f228ca8 = function() { return handleError(function (arg0, arg1, arg2) {
    getObject(arg0).randomFillSync(getArrayU8FromWasm0(arg1, arg2));
}, arguments) };

module.exports.__wbg_process_2f24d6544ea7b200 = function(arg0) {
    var ret = getObject(arg0).process;
    return addHeapObject(ret);
};

module.exports.__wbindgen_is_object = function(arg0) {
    const val = getObject(arg0);
    var ret = typeof(val) === 'object' && val !== null;
    return ret;
};

module.exports.__wbg_versions_6164651e75405d4a = function(arg0) {
    var ret = getObject(arg0).versions;
    return addHeapObject(ret);
};

module.exports.__wbg_node_4b517d861cbcb3bc = function(arg0) {
    var ret = getObject(arg0).node;
    return addHeapObject(ret);
};

module.exports.__wbg_modulerequire_3440a4bcf44437db = function() { return handleError(function (arg0, arg1) {
    var ret = module.require(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
}, arguments) };

module.exports.__wbg_crypto_98fc271021c7d2ad = function(arg0) {
    var ret = getObject(arg0).crypto;
    return addHeapObject(ret);
};

module.exports.__wbg_msCrypto_a2cdb043d2bfe57f = function(arg0) {
    var ret = getObject(arg0).msCrypto;
    return addHeapObject(ret);
};

module.exports.__wbg_call_ba36642bd901572b = function() { return handleError(function (arg0, arg1) {
    var ret = getObject(arg0).call(getObject(arg1));
    return addHeapObject(ret);
}, arguments) };

module.exports.__wbindgen_object_clone_ref = function(arg0) {
    var ret = getObject(arg0);
    return addHeapObject(ret);
};

module.exports.__wbg_newnoargs_9fdd8f3961dd1bee = function(arg0, arg1) {
    var ret = new Function(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
};

module.exports.__wbg_self_bb69a836a72ec6e9 = function() { return handleError(function () {
    var ret = self.self;
    return addHeapObject(ret);
}, arguments) };

module.exports.__wbg_window_3304fc4b414c9693 = function() { return handleError(function () {
    var ret = window.window;
    return addHeapObject(ret);
}, arguments) };

module.exports.__wbg_globalThis_e0d21cabc6630763 = function() { return handleError(function () {
    var ret = globalThis.globalThis;
    return addHeapObject(ret);
}, arguments) };

module.exports.__wbg_global_8463719227271676 = function() { return handleError(function () {
    var ret = global.global;
    return addHeapObject(ret);
}, arguments) };

module.exports.__wbindgen_is_undefined = function(arg0) {
    var ret = getObject(arg0) === undefined;
    return ret;
};

module.exports.__wbg_buffer_9e184d6f785de5ed = function(arg0) {
    var ret = getObject(arg0).buffer;
    return addHeapObject(ret);
};

module.exports.__wbg_newwithbyteoffsetandlength_e57ad1f2ce812c03 = function(arg0, arg1, arg2) {
    var ret = new Uint8Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
    return addHeapObject(ret);
};

module.exports.__wbg_length_2d56cb37075fcfb1 = function(arg0) {
    var ret = getObject(arg0).length;
    return ret;
};

module.exports.__wbg_new_e8101319e4cf95fc = function(arg0) {
    var ret = new Uint8Array(getObject(arg0));
    return addHeapObject(ret);
};

module.exports.__wbg_set_e8ae7b27314e8b98 = function(arg0, arg1, arg2) {
    getObject(arg0).set(getObject(arg1), arg2 >>> 0);
};

module.exports.__wbg_newwithlength_a8d1dbcbe703a5c6 = function(arg0) {
    var ret = new Uint8Array(arg0 >>> 0);
    return addHeapObject(ret);
};

module.exports.__wbg_subarray_901ede8318da52a6 = function(arg0, arg1, arg2) {
    var ret = getObject(arg0).subarray(arg1 >>> 0, arg2 >>> 0);
    return addHeapObject(ret);
};

module.exports.__wbindgen_is_string = function(arg0) {
    var ret = typeof(getObject(arg0)) === 'string';
    return ret;
};

module.exports.__wbindgen_throw = function(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};

module.exports.__wbindgen_rethrow = function(arg0) {
    throw takeObject(arg0);
};

module.exports.__wbindgen_memory = function() {
    var ret = wasm.memory;
    return addHeapObject(ret);
};

const path = require('path').join(__dirname, 'okapi_wasm_bg.wasm');
const bytes = require('fs').readFileSync(path);

const wasmModule = new WebAssembly.Module(bytes);
const wasmInstance = new WebAssembly.Instance(wasmModule, imports);
wasm = wasmInstance.exports;
module.exports.__wasm = wasm;
