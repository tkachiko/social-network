import React from 'react'
import styles from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import {DialogsPropsType} from './DialogsContainer'
import {FormDataType, SendMessageForm} from './SendMessageForm'

export const Dialogs: React.FC<DialogsPropsType> = (props) => {
  const dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id} />)
  const messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} id={m.id} key={m.id} />)

  const addNewMessage = (data: FormDataType) => {
    props.sendMessage(data.newMessageBody)
  }

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>{dialogsElements}</div>
      <div className={styles.messages}>{messagesElements}</div>
      <SendMessageForm onSubmit={addNewMessage} />
    </div>
  )
}