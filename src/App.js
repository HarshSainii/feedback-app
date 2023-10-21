// function App(){
// const title ='STUDENT DETAILS'
// const students =[
// {'Name': 'Deepak kalal' ,
// 'Class': 'BCA',
// 'Rollno': 45  },
// {'Name': 'HARSH' ,
// 'Class': 'BCA',
// 'Rollno': 12  },
// {'Name': 'HAIDER' ,
// 'Class': 'OPEN',
// 'Rollno': 14  }
// ]


//     return(
//     <div className="container">
//    <center> <h1>{title.toUpperCase()}</h1></center>
    
// <div className="comments">
//     <h3>students({students.length})</h3>
// <table class="styled-table">

// <th>Name</th> <th>Class</th><th> Rollno</th>
// <tbody>
// {students.map((students, index) =>(

// <tr class="active-row"><td>{students.Name}</td> <td>{students.Class}</td> <td>{students.Rollno}</td></tr>

// ))}
// </tbody>
// </table>


// </div>




// </div>)
// }
// export default App
// function App(){
//     const title ='Student detail'
//     const body = 'This is my blog post'
//     const comments = [
//         {id: 1,  text: 'comment one'},
//         {id: 2,  text: 'comment two'},
//         {id: 3,  text: 'comment three'},
//     ]
//     const loading = false
//     const showComments = true




//     if(loading) return <h1>Loading...</h1>
    
    
//         return(
//         <div className="container">
//         <h1>{title.toUpperCase()}</h1>
//         <p>{body}</p>

//             {showComments? (
//             <div className="comments">
//         <h3>Comments({comments.length})</h3>
//         <ul>
//             {
//                 comments.map((comment,index)=>(
//                  <li>{comment.id} {comment.text} </li>   
//                 ))
//             }
//         </ul>
//         </div>   
//             ) : (
//                 'no'
//             )}

//         </div>
//         )
//             }

     
//     export default App
// function App(){
//          const title ='Student detail'
//          const body = 'This is my blog post'
//          const comments = [
//              {id: 1,  text: 'comment one'},
//              {id: 2,  text: 'comment two'},
//             {id: 3,  text: 'comment three'},
//          ]
//          const loading = false
//          const showComments = true
    
    
    
    
//          if(loading) return <h1>Loading...</h1>
//          const commentBlock = ( 
//          <div className="comments">
//          <h3>Comments({comments.length})</h3>
//          <ul>
//              {
//                  comments.map((comment,index)=>(
//                   <li>{comment.id} {comment.text} </li>   
//                 ))
//              }
//          </ul>
//          </div>   
//            )

//   return (
//             <div className="container">
//              <h1>{title.toUpperCase()}</h1>
//              <p>{body}</p>
//         {showComments && commentBlock}
//                          </div>
//              )
//                  }
    
         
//         export default App
import { FeedbackProvider } from './Context/FeedbackContext';
import Post from './components/Post'
import { BrowserRouter as Router ,Route,Routes,NavLink} from 'react-router-dom'
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import Card from './components/shared/Card';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import AbouticonLink from './components/AbouticonLink';

function App(){

  return(
    <FeedbackProvider>
    <Router>
    <Header />
    <div className="container">
      <Routes>
    <Route exact path='/'
    element ={
      <>
      <FeedbackForm />
        <FeedbackStats />
        <FeedbackList />
        </>
    }>
      </Route>
               
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/post/*'element={<Post/>}/>
  </Routes>
  <Card>
    <NavLink to='/' activeClassName='active'>Home</NavLink>
 <NavLink to='/about' activeClassName='active'>About</NavLink>
  </Card>
    <AbouticonLink />
    </div>
    </Router>
</FeedbackProvider>
)
}
export default App
