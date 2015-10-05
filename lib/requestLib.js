'use strict';

function _transfromHeaders(defaultHeaders, newHeaders) {
  var clone = defaultHeaders;
  var keys = Object.keys(newHeaders);
  for(var i = 0; i < keys.length; i++) {
    var key = keys[i];
    clone[key] = newHeaders[key];
  }
  return clone;
}

function _isArray(obj) {
  if (typeof obj === 'undefined') { return false; }
  return obj.constructor === Array;
}

function _isObject(obj) {
  if (typeof obj === 'undefined') { return false; }
  return obj.constructor === Object;
}

function _transfromFormBody(body, formData, originalKey) {
  var keys = Object.keys(body);
  for(var i = 0; i < keys.length; i++) {
    var obj = body[keys[i]];
    var key = typeof originalKey !== 'undefined' ? `${originalKey}[${keys[i]}]` : keys[i];
    if (_isArray(obj)) {
      for(var k in obj) {
        formData.append(`${key}[]`, obj[k]);
      }
    } else if (_isObject(obj)) {
      formData = _transfromFormBody(obj, formData, key);
    } else {
      formData.append(key, obj);
    }
  }
  return formData;
}

function _transfromBody(body, isFormData) {
  if (!isFormData) {
    return JSON.stringify(body);
  }
  return _transfromFormBody(body, new FormData());
}

function _request(isFormData, method, url, body, success, fail, headers) {
  var defaultHeaders = { 'Accept': 'application/json' };
  if (!isFormData) {
    defaultHeaders['Content-Type'] = 'application/json';
  }

  var fetchData = {
    method: method,
    headers: _transfromHeaders(defaultHeaders, headers || {}),
  };
  if (method !== 'get') {

    fetchData.body = _transfromBody(body, isFormData);
  }

  fetch(url, fetchData)
  .then(function(response){
    return { status: response.status, data: response.json() };
  })
  .then(function (res) {
    if (res.status === 200) {
      if (typeof success !== 'undefined') {
        res.data.then(success);
      }
    } else if (typeof fail !== 'undefined') {
      res.data.then(fail);
    }
  }).catch(function(ex) {
    console.log('request failed', ex);
  });
}

function _apiRequest(isFormData, method, url, body, success, fail, headers) {
  var host = window.location.port ? 'lvh.me:3000' : window.location.host.replace('www.', '');
  _request(isFormData, method, `http://${host}/api/${url}`, body, success, fail, headers);
}

export var getReq = _request.bind(null, false, 'get');
export var postReq = _request.bind(null, false, 'post');
export var putReq = _request.bind(null, false, 'put');
export var deleteReq = _request.bind(null, false, 'delete');
export var patchReq = _request.bind(null, false, 'patch');

export var apiGet = _apiRequest.bind(null, false, 'get');
export var apiPost = _apiRequest.bind(null, false, 'post');
export var apiPut = _apiRequest.bind(null, false, 'put');
export var apiDelete = _apiRequest.bind(null, false, 'delete');
export var apiPatch = _apiRequest.bind(null, false, 'patch');

export var postFormReq = _request.bind(null, true, 'post');
export var apiFormPost = _apiRequest.bind(null, true, 'post');
