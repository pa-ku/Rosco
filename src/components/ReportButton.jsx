import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components'

const Form = styled.form`
position: absolute;
top: 0px;
left: -300px;
`

const SendButton = styled.input`
border: 0px;
color: #ff7f7f;
background-color: rgba(255, 0, 0, 0);
cursor: pointer;
&:hover{
    color: #fea8a8;
}
`
const Message = styled.input`
opacity: 0;
visibility: hidden;
color: green;
background-color: gray;
`

export const ReportButton = ({clueValue,wordValue}) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_41nbg7g', 'template_c8a203o', form.current, 'gSf4MzUMv9qYbQjGG')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <Form ref={form} onSubmit={sendEmail}>
      <Message type="text" value={wordValue} name="word" />
      <Message type="text" value={clueValue} name="description" />
      <SendButton type="submit" value="Report" />
    </Form>
  );
};