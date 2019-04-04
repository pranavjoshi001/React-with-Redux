import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import *  as courseAction from '../../actions/CourseActions';
import CourseList from './CourseList';

class CoursesPage extends React.Component {
  constructor(props)
  {
    super(props);
  }

  render() {
    const {courses} = this.props;

    return(
      <div>
        <h1>Courses!</h1>
        <CourseList courses={courses}/>
      </div>
    );
  }
}


CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired
 // createCourse: PropTypes.func.isRequired

};
function mapStateToProps(state, ownProp){
  return{
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch){
  return{
   // createCourse: course => dispatch(courseAction.createCourse(course))
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
