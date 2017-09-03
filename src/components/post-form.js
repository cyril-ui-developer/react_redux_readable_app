
import React, { Component } from 'react';
import { Form, Grid, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import classnames from 'classnames';


class PostForm extends Component {

componentWillReceiveProps = (nextProps) => { // Receive Contact data Asynchronously
  const { post } = nextProps;
  if(post.id !== this.props.post.id) { // Initialize form only once
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

  render() {
    const { handleSubmit, pristine, submitting, post} = this.props;
   console.log(post)
    return (
      <Grid centered columns={2}>
        <Grid.Column>
           <h1 style={{marginTop:"1em"}}>{post.id ? 'Edit Post' : 'Add New Post'}</h1>
          <Form onSubmit={handleSubmit}>
            <div>
              <select>
                  <option value="">Select a categories...</option>
                    {this.props.categories.map(val =>
                      <option name="category"  value={val.name} key={val.name} >
                        {val.name}
                   </option>
                    )}
                  </select>
                  {}
                </div>

            <Field name="title" type="text" component={this.renderField} label="Title"/>
            <Field name="body" type="text" component={this.renderField} label="Enter post content"/>
            {/*<textarea name="body" row="3" placeholder="Enter post content"></textarea>*/}
            <Field name="author" type="text" component={this.renderField} label="Author"/>
            <Button primary type='submit' disabled={pristine || submitting}>Save</Button>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

export default reduxForm({form: 'post'})(PostForm);

