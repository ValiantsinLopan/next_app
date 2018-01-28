import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';

const Index = (props) => (
  <Layout>
    <List>
    {props.shows.map(({show}) => (
      <ListItem as={`/p/${show.id}`} href={`/post?id=${show.id}`}
        primaryText={show.name}
        rightIcon={<ActionInfo />}
      />
      ))}
    </List>
  </Layout>
)

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)
  return {
    shows: data
  }
}

export default Index