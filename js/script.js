function alert1() {
  alert(
    "In 1776, the Founding Fathers establish voting rights and procedures in the United States. They exclude women, slaves, immigrants and many other minority groups. The only people allowed to vote were  landowners, most of whom are white, Protestant males over age 21. This foundational law will lead to centuries of minority groups fighting for their right to participate in democracy."
  );
}

function alert2() {
  alert(
    "In 1787, the standard for federal voting is revoked, and now states are permitted to determine their own voting policies within their borders. Since there are no longer federal mandates on voting procedures, many states keep the voting privileges only within white, male landowning citizens still."
  );
}

function alert3() {
  alert(
    "1848 marks a change in citizenship laws, which consequently causes alterations in voting policies. The Treaty of Guadalupe-Hidalgo is signed, which terminates the Mexican-American War and grants citizenship to Mexican citizens who live in the newly conquered American lands. Due to English proficiency language requirements, however, these new citizens struggle to access their voting privileges."
  );
}

function alert4() {
  alert(
    "Original state laws from the 1700’s largely limit voting rights to white men who are also landowners, but states slowly start to repeal this law and open up voting privileges to white men, regardless of landowning and financial status. In 1856, North Carolina is the last state to remove this restriction, so now all American white men are eligible to vote."
  );
}

function alert5() {
  alert(
    "In 1868, the Civil War is over, and the Emancipation Proclamation has been released. With the passing of the 14th Amendment, former slaves are now free in the United States, and they are granted citizenship finally. Voters are still primarily male, and voting rights are primarily decided by the states still, despite federal regulation. As a result, many people are still refused their basic right to participate in democracy."
  );
}

function alert6() {
  alert(
    "1870 is a monumental year in the voting rights legislature in light of the passing of the 15th Amendment. This law states that the right to vote cannot be denied to any American by any state or federal government based on race. Certain states, however, find loopholes to this new law and impose voting restrictions through other reforms, such as voting taxes and literacy tests that target African American voters."
  );
}

function alert7() {
  alert(
    "In 1876, the Supreme Court releases a ruling that Native Americans in the United States are not considered citizens under the definitions of citizenship that the 14th Amendment declares. As a result, indigenous people in the nation are denied the ability to vote and express their civic duty."
  );
}

function alert8() {
  alert(
    "The federal government releases the Chinese Exclusion Act in 1882 amidst increasing immigration into the United States and in an effort to keep out Asian settlers. This act bans those of Asian ancestry from becoming American citizens, so they are denied the right to vote."
  );
}

function alert9() {
  alert(
    "1887 marks another change for Native Americans that still reside within the country’s perimeters given that the passing of the Dawes Act takes place. This law essentially declares that if Native Americans assimilate and give up their affiliations with their tribes, they can become American citizens. This policy is very offensive to the traditions and customs of the indigenous peoples, so many still cannot vote as they refuse to adhere to this policy."
  );
}

function alert10() {
  alert(
    "In 1890, Wyoming becomes the 44th state in America and is the first to include women’s right to vote in its state constitution. This inclusion is monumental for the women’s suffrage movement given that female citizens of Wyoming can exercise a right that every other woman in the country is denied."
  );
}

function alert11() {
  alert(
    "1919 marks yet another change in the voting rights policies of the indigenous people that still reside in the United States. This new policy offers Native Americans who served in the American military during World War I the ability to gain citizenship, though they were not considered citizens when they risked their lives for the nation in the war."
  );
}

function alert12() {
  alert(
    "After decades of fighting for recognized equality and the ability to participate in the democracy, women are finally permitted the chance to exercise their basic right to vote. The 19th Amendment passes in 1920, and women can now vote in both state and federal elections, which is an exciting step in the right direction for gender equality on the national stage."
  );
}

function alert13() {
  alert(
    "In 1926, a group of African American women are trying to register to vote in Birmingham, Alabama when white supremacist election officials physically beat them in order to inhibit their registration. Though the federal government granted them their basic right, African Americans still struggle in the early twentieth century to exercise their right to vote in light of white intimidators."
  );
}

function alert14() {
  alert(
    "In 1947, after numerous changes to the voting policies of indigenous people, legal barriers that prevent Native Americans from voting begin to be taken down. Native American and former Marine Miguel Trujillo sues the government of New Mexico for not permitting him to vote, and he wins the case. New Mexico and Arizona, resultantly, are required to enable Native Americans to vote."
  );
}

function alert15() {
  alert(
    "After decades of discrimination and the loss of rights, those of Asian descent that reside in the United States are finally granted the ability to apply for American citizenship in 1952. This change results after the passing of the McCarran-Walter Act, which enables this altered policy."
  );
}

function alert16() {
  alert(
    "After large-scale efforts in the South to encourage African Americans to register to vote, the 24th Amendment finally passes in 1964. This law secures the right to vote in federal elections to all people regardless of their ability to pay any tax, which increases voter registration for African American people."
  );
}

function alert17() {
  alert(
    "In 1971, the federal government passes the 26th Amendment, which lowers the voting age to 18. After the Vietnam War, there were many protests from veterans and those supporting veterans based on the idea that those who are old enough to fight are old enough to have a say in their democracy."
  );
}

function alert18() {
  alert(
    "1975 marks a variety go changes for the voting rights of the diverse populations of the United States. As the number of people whose first language is not English continues to increase within the American population, the federal government removes restrictions on voting. Prior, there existed laws that prohibited people who could not read English from voting in order to minimize the immigrant vote, but that policy is abolished in 1975."
  );
}

function alert19() {
  alert(
    "In 1993, the federal government passes the National Voter Registration Act with the hope of increasing the number of citizens that are eligible to register to vote. To do so, the law makes voter registration available at the Department of Motor Vehicles, in addition to at public assistance and disabilities agencies. This increases the number of registered voters significantly."
  );
}

function alert20() {
  alert(
    "In 2001, the debate surrounding the voting rights of felons becomes a hot topic of discussion on the political front. Around four million American citizens are unable to vote due to prior criminal charges. The National Commission on Federal Election Reform announces its recommendation for states to permit felons to vote once their sentences are completed."
  );
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
