interface TweetProps {
  user: string,
  children: string
  likes: number
}

export function Tweet(props: TweetProps) {
  return (
    <div>
      <strong>{props.user}</strong>
      {props.children}
      <button>Like {props.likes}</button>
    </div>
  )
}