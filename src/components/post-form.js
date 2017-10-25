
import React, { Component } from 'react';
import { Form, Grid, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
//import { Field, reduxForm } from 'redux-form/immutable'
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import { validate } from "../helper-functions/validate";



class PostForm extends Component {
  componentDidMount() {
    this.handleInitialize();
  }

componentWillReceiveProps = (nextProps) => { 
  const { post } = nextProps;
  if(post.id !== this.props.post.id) { 
    this.props.initialize(post);
  }
}
handleInitialize() {
  const initData = {
    "id": this.props.post.id,
    "title": this.props.post.title,
    "author": this.props.post.author,
    "body": this.props.post.body,
    "category": this.props.post.category,
    "commentCount":this.props.post.commentCount,
    "deleted":this.props.post.deleted,
    "timestamp":this.props.post.timestamp,
    "voteScore":this.props.post.voteScore
  };
  
  this.props.initialize(initData);
}

// titleField = ({ input, label,name, type, value, meta: { touched, error } }) => (
//     <Form.Field className={classnames({error:touched && error})}>
//       <label>{label}</label>
//       <input  {...input} placeholder={label} type={type}/>
//       {touched && error && <span className="error">{error.message}</span>}
//     </Form.Field>
//   )
  titleField  = ({ input, label,name, type,value, meta: { touched, error } }) => (
    <Form.Field className={classnames({error:touched && error})}>
      <label>{label}</label>
      <input {...input} placeholder={label} type={type} />
      {touched && error && <span className="error">{error.message}</span>}
    </Form.Field>
  )
authorField = ({ input, label,name, type,value, meta: { touched, error } }) => (
    <Form.Field className={classnames({error:touched && error})}>
      <label>{label}</label>
      <input {...input} placeholder={label} type={type} />
      {touched && error && <span className="error">{error.message}</span>}
    </Form.Field>
  )
 bodyField = ({ input, label, type, meta: { touched, error } }) => (
    <Form.Field>
      <label>{label}</label>
      <textarea {...input}  maxLength="1000" rows="5"/>
      <div>Maximum Chararcters {input.value.length}  of 1000</div>
    </Form.Field>
  )
 categoryField = ({ input, option, label, type, meta: { touched, error } }) => (
    <Form.Field>
      <label>{label}</label>
      <select {...input} >
      {
          this.props.categories.map((type, index) => {
            return (<option key={index} value={type.name}>{type.name}</option>)
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
            <Field name="category"  component={this.categoryField} label="Select a Category"/> 
            {/* <Field name="category" component={renderSelect } label="Categoryr">
            <option></option>
            <option name="react" value="react">React</option>
            <option name="redux" value="redux">Redux</option>
            <option name="udacity" value="udacity">Udacity</option>
          </Field> */}
  
            <Field name="title" type="text" component={this.titleField} label=" Enter Title"/>
            <Field name="body" component={this.bodyField} label="Enter Post"/>
            <Field name="author" type="text"  component={this.authorField} label="Enter Author's Fullname"/>
            <Button  type="button" disabled={pristine || submitting} onClick={reset}>Reset</Button>
            <Button primary type='submit' disabled={pristine || submitting}>Save</Button>
          
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

export default reduxForm({form: 'post', validate})(PostForm);

