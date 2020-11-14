import React from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import { buildDeleteCourse } from "main/services/Courses/CourseService";


export default ({courses,admin,deleteCourse}) => {
    const history = useHistory();

    const renderEditButton = (id) => {
        return (
            <Button onClick={() => { history.push(`/courses/edit/${id}`) }}>Edit</Button>
        )
    }

    const renderDeleteButton = (id) => {
        return (
            <Button variant="danger" onClick={() => deleteCourse(id)}>Delete</Button>
        )
    }

    const columns = [{
        dataField: 'id',
        text: 'id'
    }, {
        dataField: 'name',
        text: 'Course Number'
    }, {
        dataField: 'quarter',
        text: 'Quarter'
    }, {
        dataField: 'instructorFirstName',
        text: 'First'
    }, {
        dataField: 'instructorLastName',
        text: 'Last'
    }, {
        dataField: 'instructorEmail',
        text: 'Email'
    }];

    if (admin) {
        columns.push({
            text: "Edit",
            formatter: (cell, row) => renderEditButton(row.id)
        });
        columns.push({
            text: "Delete",
            formatter: (cell, row) => renderDeleteButton(row.id)
        });
    }

    return (
        <BootstrapTable keyField='id' data={courses} columns={columns} />
    );
}