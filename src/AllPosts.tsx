import { useParams } from 'react-router-dom'

export const AllPosts = () => {
  const { pageNumber } = useParams()

  return (
    <div>
      <h2>Page {pageNumber}</h2>
    </div>
  )
}