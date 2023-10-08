// posts.js
import "./styles.css";
// Create the HTML structure for the Posts component
const postsComponent = document.createElement("div");
postsComponent.classList.add("container");
postsComponent.innerHTML = `
  
<body>
<header>
  <!--NavBar Section-->
  <div class="navbar">
    <nav class="navigation hide" id="navigation">
      <span class="close-icon" id="close-icon" onclick="showIconBar()"
        ><i class="fa fa-close"></i
      ></span>
      <ul class="nav-list">
        <li class="nav-item"><a href="forums.html">Home</a></li>
        <li class="nav-item"><a href="posts.html">Posts</a></li>
        <li class="nav-item"><a href="detail.html">Forums</a></li>
      </ul>
    </nav>
    <a class="bar-icon" id="iconBar" onclick="hideIconBar()"
      ><i class="fa fa-bars"></i
    ></a>
    <div class="brand">Posts</div>
  </div>
  <!--SearchBox Section-->
  <div class="search-box">
    <div>
      <select name="" id="">
        <option value="Everything">Everything</option>
        <option value="Titles">Titles</option>
        <option value="Descriptions">Descriptions</option>
      </select>
      <input type="text" name="q" placeholder="search ..." />
      <button><i class="fa fa-search"></i></button>
    </div>
  </div>
</header>
<div class="container">
  <!--Navigation-->
  <div class="navigate">
    <span
      ><a href="">MyForum - Forums</a> >>
      <a href="">random subforum</a></span
    >
  </div>
  <!--Display posts table-->
  <div class="posts-table">
    <div class="table-head">
      <div class="status">Status</div>
      <div class="subjects">Subjects</div>
      <div class="replies">Replies/Views</div>
      <div class="last-reply">Last Reply</div>
    </div>
    <div class="table-row">
      <div class="status"><i class="fa fa-fire"></i></div>
      <div class="subjects">
        <a href="">Is learning Python on 2021 worth it?</a>
        <br />
        <span
          >Started by <b><a href="">User</a></b> .</span
        >
      </div>
      <div class="replies">
        2 replies <br />
        125 views
      </div>

      <div class="last-reply">
        Oct 12 2021
        <br />By <b><a href="">User</a></b>
      </div>
    </div>
    <!--starts here-->
    <div class="table-row">
      <div class="status"><i class="fa fa-fire"></i></div>
      <div class="subjects">
        <a href="">Is learning Python on 2021 worth it?</a>
        <br />
        <span
          >Started by <b><a href="">User</a></b> .</span
        >
      </div>
      <div class="replies">
        2 replies <br />
        125 views
      </div>

      <div class="last-reply">
        Oct 12 2021
        <br />By <b><a href="">User</a></b>
      </div>
    </div>

    <div class="table-row">
      <div class="status"><i class="fa fa-fire"></i></div>
      <div class="subjects">
        <a href="">Is learning Python on 2021 worth it?</a>
        <br />
        <span
          >Started by <b><a href="">User</a></b> .</span
        >
      </div>
      <div class="replies">
        2 replies <br />
        125 views
      </div>

      <div class="last-reply">
        Oct 12 2021
        <br />By <b><a href="">User</a></b>
      </div>
    </div>

    <div class="table-row">
      <div class="status"><i class="fa fa-book"></i></div>
      <div class="subjects">
        <a href="">Is learning Python on 2021 worth it?</a>
        <br />
        <span
          >Started by <b><a href="">User</a></b> .</span
        >
      </div>
      <div class="replies">
        2 replies <br />
        125 views
      </div>

      <div class="last-reply">
        Oct 12 2021
        <br />By <b><a href="">User</a></b>
      </div>
    </div>

    <div class="table-row">
      <div class="status"><i class="fa fa-rocket"></i></div>
      <div class="subjects">
        <a href="">Is learning Python on 2021 worth it?</a>
        <br />
        <span
          >Started by <b><a href="">User</a></b> .</span
        >
      </div>
      <div class="replies">
        2 replies <br />
        125 views
      </div>

      <div class="last-reply">
        Oct 12 2021
        <br />By <b><a href="">User</a></b>
      </div>
    </div>

    <div class="table-row">
      <div class="status"><i class="fa fa-frown-o"></i></div>
      <div class="subjects">
        <a href="">Is learning Python on 2021 worth it?</a>
        <br />
        <span
          >Started by <b><a href="">User</a></b> .</span
        >
      </div>
      <div class="replies">
        2 replies <br />
        125 views
      </div>

      <div class="last-reply">
        Oct 12 2021
        <br />By <b><a href="">User</a></b>
      </div>
    </div>

    <div class="table-row">
      <div class="status"><i class="fa fa-fire"></i></div>
      <div class="subjects">
        <a href="">Is learning Python on 2021 worth it?</a>
        <br />
        <span
          >Started by <b><a href="">User</a></b> .</span
        >
      </div>
      <div class="replies">
        2 replies <br />
        125 views
      </div>

      <div class="last-reply">
        Oct 12 2021
        <br />By <b><a href="">User</a></b>
      </div>
    </div>

    <div class="table-row">
      <div class="status"><i class="fa fa-fire"></i></div>
      <div class="subjects">
        <a href="">Is learning Python on 2021 worth it?</a>
        <br />
        <span
          >Started by <b><a href="">User</a></b> .</span
        >
      </div>
      <div class="replies">
        2 replies <br />
        125 views
      </div>

      <div class="last-reply">
        Oct 12 2021
        <br />By <b><a href="">User</a></b>
      </div>
    </div>

    <div class="table-row">
      <div class="status"><i class="fa fa-lock"></i></div>
      <div class="subjects">
        <a href="">Is learning Python on 2021 worth it?</a>
        <br />
        <span
          >Started by <b><a href="">User</a></b> .</span
        >
      </div>
      <div class="replies">
        2 replies <br />
        125 views
      </div>

      <div class="last-reply">
        Oct 12 2021
        <br />By <b><a href="">User</a></b>
      </div>
    </div>

    <div class="table-row">
      <div class="status"><i class="fa fa-fire"></i></div>
      <div class="subjects">
        <a href="">Is learning Python on 2021 worth it?</a>
        <br />
        <span
          >Started by <b><a href="">User</a></b> .</span
        >
      </div>
      <div class="replies">
        2 replies <br />
        125 views
      </div>

      <div class="last-reply">
        Oct 12 2021
        <br />By <b><a href="">User</a></b>
      </div>
    </div>
    <!--ends here-->
  </div>
  <!--Pagination starts-->
  <div class="pagination">
    pages: <a href="">1</a><a href="">2</a><a href="">3</a>
  </div>
  <!--pagination ends-->
</div>

<div class="note">
  <span><i class="fa fa-frown-o"></i>&nbsp; 0 Engagement Topic</span
  >&nbsp;&nbsp;&nbsp;<a href=""><i class="fa fa-share-square"></i></a><br />
  <span><i class="fa fa-book"></i>&nbsp; Low Engagement Topic</span
  >&nbsp;&nbsp;&nbsp;<a href=""><i class="fa fa-share-square"></i></a><br />
  <span><i class="fa fa-fire"></i>&nbsp; Popular Topic</span
  >&nbsp;&nbsp;&nbsp;<a href=""><i class="fa fa-share-square"></i></a><br />
  <span><i class="fa fa-rocket"></i>&nbsp; High Engagement Topic</span
  >&nbsp;&nbsp;&nbsp;<a href=""><i class="fa fa-share-square"></i></a><br />
  <span><i class="fa fa-lock"></i>&nbsp; Closed Topic</span
  >&nbsp;&nbsp;&nbsp;<a href=""><i class="fa fa-share-square"></i></a><br />
</div>

</body>
`;

// Link the main.js and styles.css
const mainScript = document.createElement("script");
mainScript.src = "main.js";

const stylesLink = document.createElement("link");
stylesLink.rel = "stylesheet";
stylesLink.href = "styles.css";

// Append the components and links to the document
document.head.appendChild(mainScript);
document.head.appendChild(stylesLink);
document.body.appendChild(postsComponent);
