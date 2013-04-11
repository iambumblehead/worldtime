var DOMParser = require('xmldom').DOMParser,
    fs = require('fs'),
    path = require('path');

function parseFile(file, fn) {
  fs.readFile(input, 'ascii', function (err, fd) {
  });    
}

function parseFileArr(fileArr, fn){

}




// we may need this later... not now.
// input:                               output:
//  data = {                             <data>
//    price : "$15.87",                    <price>$15.87</price>
//    happy : {                            <happy>
//      say      : "i'm happy",              <say>i'm happy</say>
//      respond  : "you're happy",           <respond>you're happy</respond>
//      conclude : "we're all happy"         <conclude>we're all happy</conclude>
//    },                                   </happy>
//    isfinal : "true"                     <isFinal>true</isFinal>
//  }                                    </data>

var HTTP = require('./HTTP.js');

HTTP.getObjAsXML = function(data) {
  var xmlStr;

  function getNodeTree(obj) {
    var xmlStr = "";
    if (obj) {
      if (typeof obj === "object") {
        for (var name in obj) {
          xmlStr += '<' + name + '>' + getNodeTree(obj[name]) + '</' + name + '>\n';
        }
      } else {
        xmlStr += obj.toString();
      }
    }
    return xmlStr;
  }

  xmlStr = "";
  xmlStr += '<?xml version="1.0" encoding="UTF-8"?>\n';
  xmlStr += '<data>\n';
  xmlStr += getNodeTree(data);
  xmlStr += '</data>';

  return xmlStr;
};



// note: appending Arr to a node name forces the value to be recognized as an array
//       if we use the criteria of counting node name instances, we create
//       inconsistent opportunities for data to be qualified as array or
//       string
//
// input:                              output:
//  <data>                               data = {
//    <price>$15.87</price>                price : "$15.87",
//    <updateHTML>                         updateHTML : "<p><b>html</b></p>"
//      <p>                                happy : {
//        <b>html</b>                        say      : "happy?",
//      </p>                                 respond  : "happy!",
//    </updateHTML>                          conclude : "HAPPY.",
//    <happy>                             }
//      <say>happy?</say>                 isFinal : "true",
//      <respond>happy!</respond>         name : ["chris", "dave"],
//      <conclude>HAPPY</conclude>        fooArr : [value]
//    </happy>                          }
//    <isFinal>true</isFinal>
//    <name>dave</name>
//    <name>chris</name>
//    <fooArr>value</fooArr>
//  </data>

// this function wasn't always ugly. it was once nice.
/*
        ELEMENT_NODE                :  1,
        ATTRIBUTE_NODE              :  2,
        TEXT_NODE                   :  3,
        CDATA_SECTION_NODE          :  4,
        ENTITY_REFERENCE_NODE       :  5,
        ENTITY_NODE                 :  6,
        PROCESSING_INSTRUCTION_NODE :  7,
        COMMENT_NODE                :  8,
        DOCUMENT_NODE               :  9,
        DOCUMENT_TYPE_NODE          : 10,
        DOCUMENT_FRAGMENT_NODE      : 11,
        NOTATION_NODE               : 12
*/

function getNodeAsArr(nodeChild) {
  var nodeObj = HTTP.getXMLAsObj(nodeChild),
      nodeName = nodeChild.nodeName,
      finObj;

  // property names are unknown here, 
  // and so for-loop is used
  for (var o in nodeObj) {
    if (nodeObj.hasOwnProperty(o)) {
      if (KUA.isArray(nodeObj[o])) {
        finObj = nodeObj[o];
      } else {
        finObj = [nodeObj[o]];
      }
    }
  }  
  return finObj;
}

function getNodeChildren(node) {
  var nodeChild = node.firstChild, 
      nodeType, nodeName, finObj = {}, strObj = '';

//  for (node; node = node.nextSibling;) {
//  }
  
  do {
    nodeType = nodeChild.nodeType;
    nodeName = nodeChild.nodeName;
    if (nodeType === 1) { // element
      if (nodeName.match(/Arr\b/)) { // if array trigger, make this an array
        //tmpObj = HTTP.getXMLAsObj(nodeChild);
        finObj[nodeName] = getNodeAsArr(nodeChild);
      } else if (finObj[nodeName]) { 
        if (KUA.isArray(finObj[nodeName])) {
          // if array already formed, push item to array
          finObj[nodeName].push(HTTP.getXMLAsObj(nodeChild));
        } else {
          // if a repeated node, redefine this as an array
          finObj[nodeName] = [finObj[nodeName]];
          finObj[nodeName].push(HTTP.getXMLAsObj(nodeChild));
        }
      } else {
        finObj[nodeName] = HTTP.getXMLAsObj(nodeChild);
      }
    } else if (nodeType === 3) { // text
      strObj += nodeChild.nodeValue;
    }
  } while ((nodeChild = nodeChild.nextSibling));

  return strObj || finObj;
}


HTTP.getXMLAsObj = function(node) {
  var elemObj = {}, tmpObj = {}, nodeName, nodeType,
      strObj = "", nodeChild;
  if (node && node.hasChildNodes()) {
    return getNodeChildren(node);
  
    /*
    nodeChild = node.firstChild;
    do {
      nodeType = nodeChild.nodeType;
      if (nodeType === 1) { // element
        nodeName = nodeChild.nodeName;
        if (nodeName.match(/Arr\b/)) { // if array trigger, make this an array
          //tmpObj = HTTP.getXMLAsObj(nodeChild);
          elemObj[nodeName] = getNodeAsArr(nodeChild);
        } else if (elemObj[nodeName]) { 
          if (KUA.isArray(elemObj[nodeName])) {
            // if array already formed, push item to array
            elemObj[nodeName].push(HTTP.getXMLAsObj(nodeChild));
          } else {
            // if a repeated node, redefine this as an array
            elemObj[nodeName] = [elemObj[nodeName]];
            elemObj[nodeName].push(HTTP.getXMLAsObj(nodeChild));
          }
        } else {
          elemObj[nodeName] = HTTP.getXMLAsObj(nodeChild);
        }
      } else if (nodeType === 3) { // text
        strObj += nodeChild.nodeValue;
      }
    } while ((nodeChild = nodeChild.nextSibling));
    return (nodeName) ? elemObj : strObj;
     */
  }
  return null;
};