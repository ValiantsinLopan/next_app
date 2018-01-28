import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const imageStyle = { //TODO: make weight proportional to image height
  height: '90vh',
  weight: 'auto'
}
const Post =  (props) => (
    <Layout>
      <Card>
        <CardMedia
          overlay={<CardTitle title={props.show.name} subtitle={props.show.summary.replace(/<[/]?p>/g, '')}/>}
        >
          <img src={props.show.image.original} style={imageStyle}/>
        </CardMedia>
      </Card>
    </Layout>
)

Post.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const show = await res.json()

  console.log(`Fetched show: ${show.name}`)
  return { show }
}

export default Post