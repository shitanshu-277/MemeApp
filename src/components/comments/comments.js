import CommentBox from "./commentbox";

const data = [
  {
    username: "Andrew Austin",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    replies: [
      {
        username: "Andy",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ],
  },
  {
    username: "Jennifer Austin",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    replies: [
      {
        username: "Candy",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        replies: [
          {
            username: "Candy",
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            replies: [
              {
                username: "Candy",
                comment:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              }
            ],
          },
          {
            username: "Candy",
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
        ],
      },
      {
        username: "Candy",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ],
  },
  {
    username: "Jack Jones",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const Comment = () => {
  return (
    <div>
        <CommentBox data={data}/>
    </div>
  )
};

export default Comment;
