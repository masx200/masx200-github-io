import { Container, Content, Header } from "rsuite";
import { FlexboxGrid, Row } from "rsuite";
import { useComputed, useSignal } from "@preact/signals";

import Button from "rsuite/Button";
import Input from "rsuite/Input";
import React from "react";
import { useEffect } from "preact/hooks";

export default function Counter() {
    const count = useSignal(0);
    useEffect(() => {
        document.title = "计数器";
    },[]);
    const double = useComputed(() => count.value * 2);
    return (
        <div className="show-container">
            <Container>
                <Header>
                    <h1>计数器</h1>
                </Header>
                <br></br>
                <Content>
                    <FlexboxGrid justify="center">
                        <FlexboxGrid.Item colspan={24}>
                            <h3>count</h3>
                            <Row
                                className="show-grid"
                                style={{ height: "100%" }}
                            >
                                <Input
                                    //@ts-ignore
                                    value={count}
                                    style={{ height: "100%" }}
                                    onChange={(value) => {
                                        count.value = Number(value);
                                    }}
                                />
                            </Row>
                            <br></br>
                            <h3>double</h3>
                            <Row
                                className="show-grid"
                                style={{ height: "100%" }}
                            >
                                <Input
                                    //@ts-ignore
                                    value={double}
                                    style={{ height: "100%" }}
                                    onChange={(value) => {
                                        count.value = Math.round(
                                            Number(value) / 2
                                        );
                                    }}
                                />
                            </Row>
                            <br></br>
                            <Row
                                className="show-grid"
                                style={{ height: "100%" }}
                            >
                                <Button
                                    style={{ height: "100%" }}
                                    onClick={() => {
                                        count.value++;
                                    }}
                                >
                                    Increment
                                </Button>
                            </Row>
                            <br></br>
                            <Row
                                className="show-grid"
                                style={{ height: "100%" }}
                            >
                                <Button
                                    style={{ height: "100%" }}
                                    onClick={() => {
                                        count.value--;
                                    }}
                                >
                                    Decrement
                                </Button>
                            </Row>
                        </FlexboxGrid.Item>
                    </FlexboxGrid>
                </Content>
            </Container>
        </div>
    );
}
