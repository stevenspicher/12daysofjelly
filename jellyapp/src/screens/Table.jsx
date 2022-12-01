import React from "react";
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";

const UserTable = () => {
    return (
        <div>
            <Container className={"pt-5"}>
                <h1 className="title">12 Days of Spreads</h1>
                <h2 className="subtitle">Naughty or Nice?</h2>
            </Container>
            <Container className='mt-5'>
                    <div className="cards">
                        "stuuf"
                        <Button variant="primary" type="submit" as={Link}
                                key={"user"}
                                to={"/user"}>
                            Submit
                        </Button>
                    </div>
                <div className="cards">
                    "stuuf"
                    <Button variant="primary" type="submit" as={Link}
                            key={"user"}
                            to={"/user"}>
                        Submit
                    </Button>
                </div>
                <div className="cards">
                    "stuuf"
                    <Button variant="primary" type="submit" as={Link}
                            key={"user"}
                            to={"/user"}>
                        Submit
                    </Button>
                </div>
                <div className="cards">
                    "stuuf"
                    <Button variant="primary" type="submit" as={Link}
                            key={"user"}
                            to={"/user"}>
                        Submit
                    </Button>
                </div>
                <div className="cards">
                    "stuuf"
                    <Button variant="primary" type="submit" as={Link}
                            key={"user"}
                            to={"/user"}>
                        Submit
                    </Button>
                </div>
                <div className="cards">
                    "stuuf"
                    <Button variant="primary" type="submit" as={Link}
                            key={"user"}
                            to={"/user"}>
                        Submit
                    </Button>
                </div>
                <div className="cards">
                    "stuuf"
                    <Button variant="primary" type="submit" as={Link}
                            key={"user"}
                            to={"/user"}>
                        Submit
                    </Button>
                </div>


                <Button variant="secondary" type="submit" as={Link}
                        key={"login"}
                        to={"/login"}>
                    Logout
                </Button>
            </Container>
        </div>
    )
};

export default UserTable;