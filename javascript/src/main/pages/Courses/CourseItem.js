import React from "react";
import { ListGroup, Button, Row, Col } from "react-bootstrap";
import CourseEditForm from "./CourseEditForm";
import useSWR from "swr";
import { useAuth0 } from "@auth0/auth0-react";
import { fetchWithToken } from "main/utils/fetch";

export function CourseItem({ item, index, updateCourse, deleteCourse }) {
  const backgroundColor = "#fff";

  return (
    <ListGroup.Item style={{ backgroundColor }}>
      <Row>
        <Col md={11}>
          <CourseEditForm update={updateCourse} item={item} />
        </Col>
        <Col md={1}>
          <Button className="btn-danger" onClick={(e) => deleteCourse(item.id)}>
            Delete
          </Button>
        </Col>
      </Row>
    </ListGroup.Item>
  );
}
