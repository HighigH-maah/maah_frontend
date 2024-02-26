function MemberSave() {
  let member = "user2";
  sessionStorage.setItem("member", member);
}

function MemberLoad() {
  let member = sessionStorage.getItem("member");
  if (member !== null) {
    return member;
  } else {
    MemberSave();
    MemberLoad();
  }
}

export function MemberChange(e) {
  sessionStorage.setItem("member", e);
}

export default MemberLoad;
