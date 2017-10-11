
import React, { Component } from 'react';
import { Form, Grid, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { NavLink, Route } from 'react-router-dom';
import classnames from 'classnames';


class PostForm extends Component {

componentWillReceiveProps = (nextProps) => { 
  const { post } = nextProps;
  if(post.id !== this.props.post.id) { 
    this.props.initialize(post)
  }
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
    const { handleSubmit, pristine, submitting, post} = this.props;
    this.props.handleSubmit.timestamp= Date.now();

    return (
      <Grid centered columns={2}>
        <Grid.Column>{this.props.post.category }
         {post.id ?   <NavLink className='close-create-contact' to={`/post/details/${post.id}`}>Back</NavLink>  : ''}
           <h1 style={{marginTop:"1em"}}>{post.id ? 'Edit Post' : 'Add New Post'}</h1>
           {post.category}
          <Form onSubmit={handleSubmit}> 
            <Field value={this.props.post.category ? this.props.post.category : ""} name="category" type="text"  component={this.renderField} label="Enter Category i.e. react, udacity or redux"/> 
            <Field name="title" type="text" component={this.renderField} label=" Enter Title"/>
            <Field name="body" component={this.renderTextareaField} label="Enter Post"/>
            <Field name="author" type="text"  component={this.renderField} label="Enter Author"/>
            <Button primary type='submit' disabled={pristine || submitting}>Save</Button>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

export default reduxForm({form: 'post'})(PostForm);

