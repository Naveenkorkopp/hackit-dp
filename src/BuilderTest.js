import React, { Component } from 'react';
import ATestComp from "./ATestComp";
var AllComponents = require('./components');
class BuilderTest extends Component {
	super(props) {
		console.log(window.tree);
	};
	buildThePage(){
		const TREE = window.tree.json_data;
		console.log(TREE['index-page']);
		const theTree = this.getTheComp(TREE['index-page'],'');
		return theTree;
	};
	getTheComp(node, pName){
		if(!node) return null;
		const child = [];
		if (node && node.child) {
			for(var i=0;i<node.child.length;i++) {
				const k = this.getTheComp(node.child[i], node.component + '_' + pName + i);
				if(k)
				child.push(k);
			}
		}
		var Ele=AllComponents[node.component];
		//node.data['uid'] = node.component + '_' + pName;
		return <Ele data={{...node.data}} key={Math.random()}>{child}</Ele>;
	};
	render() {
		return (this.buildThePage());
   	}
}
export default BuilderTest;
