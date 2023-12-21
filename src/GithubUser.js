import useGithub from "./hooks/UseGithub";

const GitHubUser = ({username}) => {
    // https://api.github.com/users/iamvbenz49    
    const [user,loading,error] = useGithub(username);
    return (
        <div className="github-user">
            {loading && <p>Loading...</p>}
            {error && <p>error.message</p>}
            {
                user &&
                <ul>
                    <li><img src={user.avatar_url}></img></li>
                    <li><p>Name : {user.name}</p></li>
                    <li><p>{user.bio}</p></li>
                    <li><p>followers : {user.followers}</p></li>
                    <li><p>following : {user.following}</p></li>
                    <li><p>Location : {user.location}</p></li>
                </ul>
            }
        </div>
    );
}
export default GitHubUser;