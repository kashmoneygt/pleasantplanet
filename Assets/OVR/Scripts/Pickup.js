﻿var onhand : Transform;

function Update () {
    if (Input.GetButtonDown("X Button")) {
        GetButtonDown();
    }
    if (Input.GetButtonUp("X Button")) {
        GetButtonUp();
    }

}

function GetButtonDown () {
    GetComponent.<Rigidbody>().useGravity = false;
    this.transform.position = onhand.position;
    this.transform.parent = GameObject.Find("FPSController").transform;
    this.transform.parent = GameObject.Find("FirstPersonCharacter").transform;
}

function GetButtonUp () {
    this.transform.parent = null;
    GetComponent.<Rigidbody>().useGravity = true;
}