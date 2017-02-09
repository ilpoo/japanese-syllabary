'use strict';
import React from "react";
import Checkbox from './Checkbox';

export default class Menu extends React.Component{
  options=[
    {
      name: "hiragana",
      label: "Hiragana ひらがな",
      title: "Shows the hiragana",
    },{
      name: "katakana",
      label: "Katakana カタカナ",
      title: "Shows the katakana",
    },{
      name: "romanji",
      label: "Romanji",
      title: "Shows how the symbol can be written on a QWERTY keyboard",
    },{
      name: "pronunciation",
      label: "IPA Pronunciation",
      title: "Displays an international phonetic pronunciation guide",
      separate: true,
    },{
      name: "diacritics",
      label: "Diacritics 濁点",
      title: "Show syllables that use diacritics",
    },{
      name: "digraphs",
      label: "Digraphs 拗音",
      title: "Show syllables that are composed of two symbols",
    },{
      name: "transcription",
      label: "Transcription 外国語の日本語表記",
      title: "Show foreign transcription kanas",
      separate: true,
    },{
      name: "strokes",
      label: "Show stroke order",
      title: "Not available for diacritics or digraphs.",
    },{
      name: "exceptions",
      label: "Highlight romanji exceptions",
      title: "Bolds the syllables that don't follow the regular romanjination pattern",
    },{
      name: "similar",
      label: "Highlight visually similar",
      title: "When hovering on a syllable, other similar ones will be highlighted in red to avoid mixing them up",
    },{
      name: "frequency",
      label: "Visualize syllable frequency",
      title: "The more common a sound in Japanese is, the darker it'll appear on the chart",
    },
  ];

  render(){
    return (
      <nav>
        <div class="menuTitle">
          <h1>Options</h1>
        </div>
        {this.options.map(option=>(
          <Checkbox 
            name={option.name} 
            label={option.label} 
            title={option.title} 
            separate={option.separate} 
            checked={this.props.options[option.name]} 
            changeOptions={this.props.changeOptions}
            key={option.name}
          />
        ))}
      </nav>
    );
  }
}