import { Card, CardContent, Typography } from "@material-ui/core";
import { forwardRef } from "react";
import './Message.css';

const Message = forwardRef(({ username, message }, ref) => {
    const isUser = username === message.username;

    return (
        <div
            ref={ref}
            className={`message ${isUser && 'message__user'}`}
        >
            <Card className={isUser ? "message__userCard" : "message__guestCard"}>
                <CardContent>
                    <Typography
                        color="initial"
                        variant="h5"
                        component="h3"
                    >
                     {!isUser && `${message.username || 'Unknown User'}:`} {message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>

    );
});

export default Message;