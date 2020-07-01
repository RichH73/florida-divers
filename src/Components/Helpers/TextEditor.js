import React, { Component } from "react";
import ReactQuill, { Quill } from 'react-quill'
import "react-quill/dist/quill.snow.css";
import "quill-emoji/dist/quill-emoji.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../../actions/index";



class TextEditor extends Component {

    modules = {
        toolbar: [
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline','strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'image', 'video'],
          ['emoji'], ['clean']
        ],
        //"emoji-toolbar": true,
        //"emoji-textarea": true,
        //"emoji-shortname": true,
      }
    
      formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image', 'video', 'clean', 'emoji'
      ]
    


    handleChange = (value) => {
        this.props.editText({
          text: value
        })
      }


    render() {
        return (
            <ReactQuill
            name='quil'
            onChange={this.handleChange}
            modules={this.modules}
            formats={this.formats}
            readOnly={false}
            theme='snow'
            />
        )
    }
}



const mapStateToProps = state => ({
    text: state.richText.text
  });
  
  const mapDispatchToProps = dispatch => {
    return bindActionCreators(actionCreators, dispatch);
  };

export default connect(mapStateToProps, mapDispatchToProps)(TextEditor)