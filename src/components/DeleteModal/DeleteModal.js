// import React, { useState } from "react";
import { useState, useEffect } from "react/cjs/react.development";
import {
  Form,
  Label,
  FormGroup,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from "reactstrap";

const DeleteModal = (props) => {
  // const { buttonLabel, className } = props;
  const { modal, toggle, onEdit, todoId } = props;
  // const [modal, setModal] = useState(false);
  // // const [unmountOnClose, setUnmountOnClose] = useState(true);
  const [person, setPerson] = useState("");
  const [comment, setComment] = useState("");
  const [personDirty, setPersonDirty] = useState(false);
  const [commentDirty, setCommentDirty] = useState(false);
  const [personError, setPersonError] = useState(
    "поле должно содержать > 3 символов"
  );
  const [commentError, setCommentError] = useState(
    "поле должно содержать > 3 символов"
  );
  const [formValid, setFormValid] = useState(false);
  // const toggle = () => setModal(!modal);
  // const changeUnmountOnClose = (e) => {
  //   let value = e.target.value;
  //   setUnmountOnClose(JSON.parse(value));
  // };
  useEffect(() => {
    if (personError || commentError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [personError, commentError]);
  const blurHandler = (e) => {
    switch (e.target.name) {
      case "person":
        setPersonDirty(true);
        break;
      case "comment":
        setCommentDirty(true);
        break;
      default:
        break;
    }
  };
  const personHandler = (e) => {
    const value = e.target.value;
    setPerson(value.replace(new RegExp("[0-9]"), ""));
    if (value.trim().length > 2) setPersonError("");
    else setPersonError("поле должно содержать > 3 символов");
  };
  const commentHandler = (e) => {
    const value = e.target.value;
    setComment(value.replace(new RegExp("[0-9]"), ""));
    if (value.trim().length > 2) setCommentError("");
    else setCommentError("поле должно содержать > 3 символов");
  };
  return (
    <>
      {/* <Form inline onSubmit={(e) => e.preventDefault()}>
        <FormGroup>
          <Label for="unmountOnClose">UnmountOnClose value</Label>{" "}
          <Input
            type="select"
            name="unmountOnClose"
            id="unmountOnClose"
            onChange={changeUnmountOnClose}
          >
            <option value="true">true</option>
            <option value="false">false</option>
          </Input>
        </FormGroup>{" "}
        <Button color="danger" onClick={toggle}>
          {buttonLabel}
        </Button>
      </Form> */}
      <Modal
        isOpen={modal}
        toggle={toggle}
        // className={className}
        // unmountOnClose={unmountOnClose}
      >
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          {" "}
          <Form inline>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="person" className="mr-sm-2">
                Person
              </Label>{" "}
              {personDirty && personError && (
                <div style={{ color: "red" }}>{personError}</div>
              )}
              <Input
                type="text"
                name="person"
                id="person"
                value={person}
                placeholder="write name"
                onBlur={(e) => blurHandler(e)}
                onChange={(e) => {
                  personHandler(e);
                }}
              />
            </FormGroup>

            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="comment" className="mr-sm-2">
                Comment
              </Label>{" "}
              {commentDirty && commentError && (
                <div style={{ color: "red" }}>{commentError}</div>
              )}
              <Input
                type="textarea"
                name="comment"
                id="comment"
                value={comment}
                placeholder="write comment"
                rows={5}
                onBlur={(e) => blurHandler(e)}
                onChange={(e) => {
                  commentHandler(e);
                }}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          {" "}
          <Button
            color="primary"
            disabled={!formValid}
            onClick={(e) => {
              e.preventDefault();
              onEdit(todoId, `deleted by ${person}`);
              toggle();
            }}
          >
            Submit
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default DeleteModal;
