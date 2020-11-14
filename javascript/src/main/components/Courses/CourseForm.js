import React, { useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";

const CourseForm = ({ createCourse, updateCourse, existingCourse }) => {
    const emptyCourse = {
        name: "",
        quarter: "",
        instructorFirstName: "",
        instructorLastName: "",
        instructorEmail: "",
    }

    const [course, setCourse] = useState(existingCourse || emptyCourse);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (createCourse)
            createCourse(course.name, course.quarter, course.instructorFirstName, course.instructorLastName, course.instructorEmail);
        else if (updateCourse)
            updateCourse(course, course.id);
    }

    return (
        <Form onSubmit={handleOnSubmit}>
            <Form.Group as={Row}>
                <Form.Label column sm={2}>
                    Course Name
                </Form.Label>
                <Col sm={10}>
                    <Form.Control type="name" placeholder="course name" value={course.name} onChange={(e) => setCourse({
                        ...course,
                        name: e.target.value
                    })} />
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm={2}>
                    Quarter
                </Form.Label>
                <Col sm={10}>
                    <Form.Control type="quarter" placeholder="quarter" value={course.quarter} onChange={(e) => setCourse({
                        ...course,
                        quarter: e.target.value
                    })} />
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm={2}>
                    Last Name
                </Form.Label>
                <Col sm={10}>
                    <Form.Control type="instructorFirstName" placeholder="instructor first name" value={course.instructorFirstName} onChange={(e) => setCourse({
                        ...course,
                        instructorFirstName: e.target.value
                    })} />
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm={2}>
                    First Name
                </Form.Label>
                <Col sm={10}>
                    <Form.Control type="instructorLastName" placeholder="instructor last name" value={course.instructorLastName} onChange={(e) => setCourse({
                        ...course,
                        instructorLastName: e.target.value
                    })} />
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm={2}>
                    Email
                </Form.Label>
                <Col sm={10}>
                    <Form.Control type="instructorEmail" placeholder="instructor email" value={course.instructorEmail} onChange={(e) => setCourse({
                        ...course,
                        instructorEmail: e.target.value
                    })} />
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="submit">Submit</Button>
                </Col>
            </Form.Group>
        </Form>
    );
};

export default CourseForm;
