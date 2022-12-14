import React, {FC} from 'react'
import {Paginator} from '../common/Paginator/Paginator'
import {User} from './User'
import {UserType} from '../../types/types'

type UsersComponentType = {
  users: UserType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  onPageChanged: (pageNumber: number) => void
  followingInProgress: Array<number>
}

export const Users: FC<UsersComponentType> = ({
                                                users,
                                                pageSize,
                                                totalUsersCount,
                                                currentPage,
                                                follow,
                                                unfollow,
                                                onPageChanged,
                                                followingInProgress,
                                              }) => {
  return (
    <div>
      <Paginator totalItemsCount={totalUsersCount}
                 pageSize={pageSize}
                 currentPage={currentPage}
                 onPageChanged={onPageChanged}
      />
      {users
        .map((u) => <User user={u}
                          key={u.id}
                          followingInProgress={followingInProgress}
                          follow={follow}
                          unfollow={unfollow}
        />)}
    </div>
  )
}