import React,{useState} from 'react'
import {Card,Button,Modal} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { userActions } from '../features/user/actions'

const User = ({user,ping , setPing}) => {
    const [show, setShow] = useState(false);
    const [edited, setedited] = useState({
        name :user.name,
        lastName:"",
        email:"",
        password:"",
    })


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const dispatch = useDispatch()
    const handleDelete =()=>{
        dispatch(userActions.delete(user._id));
        setPing(!ping);
    }
    const handleEdit =()=>{
        dispatch(userActions.put({id:user._id, edited}));
        setPing(!ping);
    }
    console.log(user._id)
    return (
        <div>
       <Card style={{ width: '18rem' }}>
 
  <Card.Body>
    <Card.Title>{user.name}</Card.Title>
    <Card.Text>
     {user.email}
     {user.lastName}
    </Card.Text>
    <>
      <Button variant="primary" onClick={handleShow}>
       edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <input type="text"  placeholder="enter your name " onChange={ (e)=> setedited({...user,name : e.target.value})}/>
            <input type="text"  placeholder="enter your lastname name " onChange={ (e)=> setedited({...user,lastName : e.target.value})}/>
            <input type="text"  placeholder="enter your password " onChange={ (e)=> setedited({...user,password : e.target.value})}/>
            <input type="text"  placeholder="enter your email " onChange={ (e)=> setedited({...user,email : e.target.value})}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button  variant="primary" onClick={()=>{
              handleClose();
              handleEdit()
          }}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    <Button variant="primary" onClick={handleDelete}>Delete</Button>
  </Card.Body>
</Card>

        </div>
    )
}

export default User
