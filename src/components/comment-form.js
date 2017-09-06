
import React, { Component } from 'react';
import { Form, Grid, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { NavLink, Route } from 'react-router-dom';
import classnames from 'classnames';


class CommentForm extends Component {

componentWillReceiveProps = (nextProps) => { 
  const { comment } = nextProps;
//   if(post.id !== this.props.post.id) { 
//     this.props.initialize(post)
//   }
}


  renderField = ({ input, label, type, meta: { touched, error } }) => (
    <Form.Field className={classnames({error:touched && error})}>
      <label>{label}</label>
      <input {...input} placeholder={label} type={type}/>
      {touched && error && <span className="error">{error.message}</span>}
    </Form.Field>
  )
 renderTextareaField = ({ input, label, type, meta: { touched, error } }) => (
    <Form.Field>
      <textarea {...input} />
      {touched && error && <span className="error">{error.message}</span>}
    </Form.Field>
  )
 renderSelectField = ({ input, option, label, type, meta: { touched, error } }) => (
    <Form.Field>
      <select {...input}  option={option}/>
      {touched && error && <span className="error">{error.message}</span>}
    </Form.Field>
  )

  render() {
    const { handleSubmit, pristine, submitting, post, commentId} = this.props;
    return (
      <Grid columns={3}>
        <Grid.Column>
            <hr/> <hr/>
            <h3>Add New Comment</h3>
           {/* <h1 style={{marginTop:"1em"}}>{commentId.id ? 'Edit Post' : 'Add New Post'}</h1> */}
          <Form onSubmit={handleSubmit}>       
            <Field name="body" component={this.renderTextareaField}/>    
            <Field name="author" type="text"  component={this.renderField} label="Author"/>
            <Button primary type='submit' disabled={pristine || submitting}>Save</Button>
            
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

export default reduxForm({form: 'comment'})(CommentForm);

