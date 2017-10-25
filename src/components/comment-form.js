
import React, { Component } from 'react';
import { Form, Grid, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import { validate } from "../helper-functions/validate";

class CommentForm extends Component {

  componentDidMount() {
    this.handleInitialize();
  }
componentWillReceiveProps = (nextProps) => { 
  const { comment } = nextProps;
  if(comment.id !== this.props.comment.id) { 
    this.props.initialize(comment)
  }
}

handleInitialize() {
  const initData = {
    "id": this.props.comment.id,
    "parentId":this.props.comment.parentId,
    "title": this.props.comment.title,
    "author": this.props.comment.author,
    "body": this.props.comment.body,
    "deleted":this.props.comment.deleted,
    "parentDeleted":this.props.comment.parentDeleted,
    "timestamp":this.props.comment.timestamp,
    "voteScore":this.props.comment.voteScore
  };
  
  this.props.initialize(initData);
}

authorField = ({ input, label, type, meta: { touched, error } }) => (
    <Form.Field className={classnames({error:touched && error})}>
      <label>{label}</label>
      <input {...input} placeholder={label} type={type}/>
      {touched && error && <span className="error">{error.message}</span>}
    </Form.Field>
  )
 bodyField = ({ input, label, type, meta: { touched, error } }) => (
    <Form.Field>
      <textarea {...input} maxLength="200" rows="3" />
      <div>Maximum Chararcters {input.value.length}  of 200</div>
    </Form.Field>
  )


  render() {
    const { handleSubmit, pristine, submitting, comment,post} = this.props;
    return (
      <Grid columns={3}>
        <Grid.Column>
          {post.parentId}
        <NavLink className='close-create-contact' to={`/${post.category}/${post.id}`}>Back</NavLink> 
         <h1 style={{marginTop:"1em"}}>{comment.id ? 'Edit Comment' : 'Add New Comment'}</h1>  
          <Form onSubmit={handleSubmit}>       
            <Field name="body" component={this.bodyField} label="Enter Comment" />    
            <Field name="author" type="text"  component={this.authorField} label="Enter Author"/>
            <Button primary type='submit' disabled={pristine || submitting}>Save</Button>    
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

export default reduxForm({form: 'comment', validate})(CommentForm);

