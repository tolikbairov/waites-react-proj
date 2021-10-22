import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from "reactstrap";

const EditModal = (props) => {
  // const { buttonLabel, className } = props;
  const { modal, toggle, onEdit, todoId } = props;
  // const [modal, setModal] = useState(false);
  // // const [unmountOnClose, setUnmountOnClose] = useState(true);
  const [titleText, setTitleText] = useState("");
  // const toggle = () => setModal(!modal);
  // const changeUnmountOnClose = (e) => {
  //   let value = e.target.value;
  //   setUnmountOnClose(JSON.parse(value));
  // };

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
          <Input
            type="textarea"
            placeholder="Add text to title"
            rows={2}
            onChange={(e) => {
              setTitleText(e.currentTarget.value);
            }}
          />
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              onEdit(todoId, titleText);
              toggle();
            }}
          >
            Edit
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default EditModal;
