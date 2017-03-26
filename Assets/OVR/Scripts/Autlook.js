var distance : float = 5;

function Update () {
    transform.position = transform.position + Camera.main.transform.forward * distance * Time.deltaTime;
}