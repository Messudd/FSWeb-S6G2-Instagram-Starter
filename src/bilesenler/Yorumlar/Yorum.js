// Bu dosyayı değiştirmenize gerek yok
import React from 'react';

const Yorum = props => {
  // 🔥 Bu bileşenin parentının aşağıdaki propları düzgün gönderdiğinden emin olun.
  const {post } = props;

  return (
    post.comments.map((yorum) => (
    <div key={yorum.id} className='comment-text'>
      <span className='user'>{yorum.username}</span>
      {' '}
      <span className='comment'>{yorum.text}</span>
  </div>) )
    
  );
};


export default Yorum;
