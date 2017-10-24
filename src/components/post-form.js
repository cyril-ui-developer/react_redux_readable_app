
import React, { Component } from 'react';
import { Form, Grid, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';


const validate = (values) => {
  const errors = {};
  if(!values.name || !values.name) {
    errors.name = {
      message: 'You need to select category'
    }
  }
  if(!values.title || !values.title) {
    errors.title = {
      message: 'You need to enter title'
    }
  }
  if(!values.author || !values.author) {
    errors.author = {
      message: 'You need to enter author'
    }
  }
  return errors;
}

class PostForm extends Component {

componentWillReceiveProps = (nextProps) => { 
  const { post } = nextProps;
  if(post.id !== this.props.post.id) { 
    this.props.initialize(post)
  }
}

renderField = ({ input, label,name, type, meta: { touched, error } }) => (
    <Form.Field className={classnames({error:touched && error})}>
      <label>{label}</label>
      <input {...input} placeholder={label} type={type}/>
      {touched && error && <span className="error">{error.message}</span>}
    </Form.Field>
  )
 renderTextareaField = ({ input, label, type, meta: { touched, error } }) => (
    <Form.Field>
      <label>{label}</label>
      <textarea {...input}  maxLength="1000"/>
      <div>Maximum Chararcter {input.value.length}  of 1000</div>
    </Form.Field>
  )
 renderSelectField = ({ input, option, label, type, meta: { touched, error } }) => (
    <Form.Field>
      <label>{label}</label>
      <select {...input}>
      {
          this.props.categories.map((type, index) => {
            return (<option key={index} value={this.props.post.id ? type.name:""}>{type.name}</option>)
          })
        }
      </select>
    </Form.Field>
  )


  render() {
    const { handleSubmit, pristine, submitting,reset, post} = this.props;
    this.props.handleSubmit.timestamp= Date.now();

    return (
      <Grid centered columns={2}>
        <Grid.Column>
         {post.id ?   <NavLink className='close-create-contact' to={`/${post.category}/${post.id}`}>Back</NavLink>  : ''}
           <h1 style={{marginTop:"1em"}}>{post.id ? 'Edit Post' : 'Add New Post'}</h1>
          <Form onSubmit={handleSubmit}> 
          {post.category}
            <Field name="category"  component={this.renderSelectField} label="Select a Category"/> 
            <Field name="title" type="text" component={this.renderField} label=" Enter Title"/>
            <Field name="body" component={this.renderTextareaField} label="Enter Post"/>
            <Field name="author" type="text"  component={this.renderField} label="Enter Author's Fullname"/>
            <Button  type="button" disabled={pristine || submitting} onClick={reset}>Reset</Button>
            <Button primary type='submit' disabled={pristine || submitting}>Save</Button>

          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

export default reduxForm({form: 'post', validate})(PostForm);

