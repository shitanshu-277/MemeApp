const CommentBox = ({ data }) => {
  return data.map((comment,index)=>(
    <div className="pl-10 border-l-2 border-black" key={index}>
    <div className="flex">
    <div>
        <img className = "w-16 p-2 rounded-full" src="https://styles.redditmedia.com/t5_4ogtp0/styles/profileIcon_snoo05cd2fec-4e9e-450a-b380-75704dcaa0b8-headshot.png?width=64&height=64&frame=1&auto=webp&crop=64%3A64%2Csmart&s=c54f85783ddb5b8174bf2b98a509ae1ea3b80865" alt="user" />
    </div>
    <div>
        <p className="font-bold px-2 py-3">{comment.username}</p>
        <p className="px-2">{comment.comment}</p>
    </div>
    </div>
    <div>{comment?.replies && <CommentBox data={comment.replies}/>}</div>
  </div>
  ))
};

export default CommentBox;