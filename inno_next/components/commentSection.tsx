import { Avatar, Button, Input, Textarea } from "@mantine/core";
import React, { useState } from "react";

const CommentCard = ({ comment }: { comment: any }) => {
    const [reply, setReply] = useState(false);
    const [replyText, setReplyText] = useState('');
    const [postText, setPostText] = useState('');
    return (
        <div>
            <div>
                <h2 className="text-gray-700 text-2xl font-bold">
                    Comments
                </h2>
            </div>
            <div>
                <form className="w-full bg-white mt-4 rounded-lg p-4 ml-10 shadow border-l-2" onSubmit={() => { }}>
                    <Textarea
                        value={postText}
                        onChange={(e) => setPostText(e.currentTarget.value)}
                    />
                    <div className="flex  justify-end">
                        <Button className="mt-2 bg-blue-400 w-32" fullWidth type="submit">Send</Button>
                    </div>
                </form>
            </div>
            <div className="flex flex-row mt-4 bg-white rounded-lg p-4 relative hover:shadow shadow-none transition-shadow duration-800">
                <div className="flex flex-col w-full">
                    <div className="flex flex-row w-full justify-between items-center">
                        <div className="flex flex-row gap-2 px-2">
                            <Avatar src="" size={40} alt={"hello"} />
                            <div>
                                <div className="text-sm font-medium text-gray-900 font-semibold">"hello"</div>
                                <div className="text-xs font-normal text-gray-500">"world"</div>
                            </div>
                        </div>
                        <button onClick={() => setReply(!reply)}>
                            Reply
                        </button>
                    </div>
                    <div className="p-2">
                        <div className="text-sm font-normal text-gray-900">{"description"}</div>
                    </div>
                    <div className="flex gap-2">
                        <div className="flex  justify-end">
                            <Button className="mt-2 bg-blue-400 w-32" fullWidth type="submit">Edit</Button>
                        </div>
                        <div className="flex  justify-end">
                            <Button className="mt-2 bg-blue-400 w-32" fullWidth type="submit">Delete</Button>
                        </div>
                    </div>
                </div>
            </div>
            {reply && (
                <form className="w-full bg-white mt-4 rounded-lg p-4 ml-10 shadow border-l-2" onSubmit={() => {}}>
                    <Textarea
                        value={replyText}
                        onChange={(e) => setReplyText(e.currentTarget.value)}
                    />
                    <div className="flex  justify-end">
                        <Button className="mt-2 bg-blue-400 w-32" fullWidth type="submit">Send</Button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default CommentCard;
