import {v1} from 'uuid'
import {addPost, profileReducer} from './profile-reducer'
import {dialogsReducer, sendMessage} from './dialogs-reducer'
import {ProfileType} from '../types/types'

type DialogsDataType = {
  id: string
  name: string
}
type PostsDataType = {
  id: string
  message: string
  likesCount: number
}
type MessagesDataType = {
  id: string
  message: string
}
type ProfilePageType = {
  posts: PostsDataType[]
  profile: ProfileType
  status: string
  error: string | null
}
type DialogsPageType = {
  dialogs: DialogsDataType[]
  messages: MessagesDataType[]
}
type StateType = {
  profilePage: ProfilePageType
  dialogsPage: DialogsPageType
}
type StoreType = {
  _state: StateType
  getState: () => StateType
  _callSubscriber: () => void
  subscribe: (observer: () => void) => void
  dispatch: (action: ActionsTypes) => void
}
type ActionsTypes =
  ReturnType<typeof addPost>
  | ReturnType<typeof sendMessage>

const store: StoreType = {
  _state: {
    profilePage: {
      posts: [
        {id: v1(), message: 'It\'s my first post', likesCount: 17},
        {id: v1(), message: 'Hi, how are you?', likesCount: 5},
      ],
      profile: {} as ProfileType,
      status: '',
      error: null as string | null,
    },
    dialogsPage: {
      dialogs: [
        {id: v1(), name: 'Emmett'},
        {id: v1(), name: 'Marty'},
        {id: v1(), name: 'Jennifer'},
        {id: v1(), name: 'Lorraine'},
        {id: v1(), name: 'George'},
      ],
      messages: [
        {id: v1(), message: 'Hey!'},
        {id: v1(), message: 'How are you?'},
        {id: v1(), message: 'Let\'s go!'},
      ],
    },
  },
  _callSubscriber() {
    console.log()
  },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._callSubscriber()
  },
}
