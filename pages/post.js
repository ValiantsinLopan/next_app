import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const imageStyle = {
  maxHeight: '90vh',
  minWidth: '0%',
  width: 'auto',
  marginLeft: 'auto',
	marginRight: 'auto',
	display: 'block'
  
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