import React from 'react';

function Test() {
    return (
        <div>
            <Box>
                <List>
                    <ListItem divider>
                        <ListItemButton onClick={() => setOpen(true)}>
                            <ListItemIcon>{">"}</ListItemIcon>
                            <ListItemText primary={"Expand List"} />
                        </ListItemButton>
                    </ListItem>
                </List>

                <Collapse in={open}>
                    <List sx={{ marginLeft: 25 }}>
                        {array.map((listElm) => (
                            <ListItem divider>
                                <ListItemButton onClick={() => setOpen(false)}>
                                    <ListItemText primary={listElm} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Collapse>

            </Box>
        </div>
    )
}

export default Test;