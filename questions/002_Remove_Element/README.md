<div><div class="" data-track-load="description_content"><p>Given an integer array <code>nums</code> and an integer <code>val</code>, remove all occurrences of <code>val</code> in <code>nums</code> <a href="https://en.wikipedia.org/wiki/In-place_algorithm" target="_blank"><strong>in-place</strong></a>. The order of the elements may be changed. Then return <em>the number of elements in </em><code>nums</code><em> which are not equal to </em><code>val</code>.</p>

<p>Consider the number of elements in <code>nums</code> which are not equal to <code>val</code> be <code>k</code>, to get accepted, you need to do the following things:</p>

<ul>
	<li><web-highlight class="webhighlights-highlight" data-highlight-id="26f9a043-9d5c-4ab0-9a19-dfdc87612ec9" data-highlight-split-type="none" data-highlight-id-extra="" markid="674e665acacc3b3e61f574ac" media-type="blockquote" style="background-color: rgb(146, 255, 170); color: rgb(0, 0, 0); cursor: pointer;">Change the array </web-highlight><code><web-highlight class="webhighlights-highlight" data-highlight-id="26f9a043-9d5c-4ab0-9a19-dfdc87612ec9" data-highlight-split-type="none" data-highlight-id-extra="" markid="674e665acacc3b3e61f574ac" media-type="blockquote" style="background-color: rgb(146, 255, 170); color: rgb(0, 0, 0); cursor: pointer;">nums</web-highlight></code><web-highlight class="webhighlights-highlight" data-highlight-id="26f9a043-9d5c-4ab0-9a19-dfdc87612ec9" data-highlight-split-type="none" data-highlight-id-extra="" markid="674e665acacc3b3e61f574ac" media-type="blockquote" style="background-color: rgb(146, 255, 170); color: rgb(0, 0, 0); cursor: pointer;"> such that the first </web-highlight><code><web-highlight class="webhighlights-highlight" data-highlight-id="26f9a043-9d5c-4ab0-9a19-dfdc87612ec9" data-highlight-split-type="none" data-highlight-id-extra="" markid="674e665acacc3b3e61f574ac" media-type="blockquote" style="background-color: rgb(146, 255, 170); color: rgb(0, 0, 0); cursor: pointer;">k</web-highlight></code><web-highlight class="webhighlights-highlight" data-highlight-id="26f9a043-9d5c-4ab0-9a19-dfdc87612ec9" data-highlight-split-type="none" data-highlight-id-extra="" markid="674e665acacc3b3e61f574ac" media-type="blockquote" style="background-color: rgb(146, 255, 170); color: rgb(0, 0, 0); cursor: pointer;"> elements of </web-highlight><code><web-highlight class="webhighlights-highlight" data-highlight-id="26f9a043-9d5c-4ab0-9a19-dfdc87612ec9" data-highlight-split-type="none" data-highlight-id-extra="" markid="674e665acacc3b3e61f574ac" media-type="blockquote" style="background-color: rgb(146, 255, 170); color: rgb(0, 0, 0); cursor: pointer;">nums</web-highlight></code><web-highlight class="webhighlights-highlight" data-highlight-id="26f9a043-9d5c-4ab0-9a19-dfdc87612ec9" data-highlight-split-type="none" data-highlight-id-extra="" markid="674e665acacc3b3e61f574ac" media-type="blockquote" style="background-color: rgb(146, 255, 170); color: rgb(0, 0, 0); cursor: pointer;"> contain the elements which are not equal to </web-highlight><code><web-highlight class="webhighlights-highlight" data-highlight-id="26f9a043-9d5c-4ab0-9a19-dfdc87612ec9" data-highlight-split-type="tail" data-highlight-id-extra="" markid="674e665acacc3b3e61f574ac" media-type="blockquote" style="background-color: rgb(146, 255, 170); color: rgb(0, 0, 0); cursor: pointer;">val</web-highlight></code>. <web-highlight class="webhighlights-highlight" data-highlight-id="e3981c6f-1635-4141-8104-ab37d43693ce" data-highlight-split-type="none" data-highlight-id-extra="" markid="674e66eacacc3b3e61f574ae" media-type="blockquote" style="background-color: rgb(240, 25, 25); cursor: pointer;">The remaining elements of </web-highlight><code><web-highlight class="webhighlights-highlight" data-highlight-id="e3981c6f-1635-4141-8104-ab37d43693ce" data-highlight-split-type="none" data-highlight-id-extra="" markid="674e66eacacc3b3e61f574ae" media-type="blockquote" style="background-color: rgb(240, 25, 25); cursor: pointer;">nums</web-highlight></code><web-highlight class="webhighlights-highlight" data-highlight-id="e3981c6f-1635-4141-8104-ab37d43693ce" data-highlight-split-type="none" data-highlight-id-extra="" markid="674e66eacacc3b3e61f574ae" media-type="blockquote" style="background-color: rgb(240, 25, 25); cursor: pointer;"> are not important as well as the size of </web-highlight><code><web-highlight class="webhighlights-highlight" data-highlight-id="e3981c6f-1635-4141-8104-ab37d43693ce" data-highlight-split-type="none" data-highlight-id-extra="" markid="674e66eacacc3b3e61f574ae" media-type="blockquote" style="background-color: rgb(240, 25, 25); cursor: pointer;">nums</web-highlight></code><web-highlight class="webhighlights-highlight" data-highlight-id="e3981c6f-1635-4141-8104-ab37d43693ce" data-highlight-split-type="tail" data-highlight-id-extra="" markid="674e66eacacc3b3e61f574ae" media-type="blockquote" style="background-color: rgb(240, 25, 25); cursor: pointer;">.</web-highlight></li>
	<li>Return <code>k</code>.</li>
</ul>

<p><strong>Custom Judge:</strong></p>

<p>The judge will test your solution with the following code:</p>

<pre>int[] nums = [...]; // Input array
int val = ...; // Value to remove
int[] expectedNums = [...]; // <web-highlight class="webhighlights-highlight" data-highlight-id="8ea031f6-ddad-4951-a460-b2d65ec9a4e9" data-highlight-split-type="tail" data-highlight-id-extra="" markid="674e673fcacc3b3e61f574af" media-type="blockquote" style="background-color: rgb(146, 255, 170); color: rgb(0, 0, 0); cursor: pointer;">The expected answer with correct length</web-highlight>.
                            // <web-highlight class="webhighlights-highlight" data-highlight-id="6d22b335-e1ed-4575-8cfa-58289ef054e3" data-highlight-split-type="tail" data-highlight-id-extra="" markid="674e675ecacc3b3e61f574b0" media-type="blockquote" style="background-color: rgb(146, 255, 170); color: rgb(0, 0, 0); cursor: pointer;">It is sorted with no values equaling val</web-highlight>.

int <web-highlight class="webhighlights-highlight" data-highlight-id="a20a388d-5ab8-4a0f-aec0-5bb9f70f8b65" data-highlight-split-type="tail" data-highlight-id-extra="" markid="674e6946cacc3b3e61f574b1" media-type="blockquote" style="background-color: rgb(240, 25, 25); cursor: pointer;">k = removeElement(nums, val</web-highlight>); // Calls your implementation

assert k == expectedNums.length;
<web-highlight class="webhighlights-highlight" data-highlight-id="ff9a3975-b861-437b-8c65-7d6599d04c21" data-highlight-split-type="tail" data-highlight-id-extra="" markid="674e6a11cacc3b3e61f574b3" media-type="blockquote" style="background-color: rgb(248, 252, 70); color: rgb(0, 0, 0); cursor: pointer;">sort(nums, 0, k);</web-highlight> // Sort the first k elements of nums
for (int i = 0; i &lt; actualLength; i++) {
    assert nums[i] == expectedNums[i];
}
</pre>

<p>If all assertions pass, then your solution will be <strong>accepted</strong>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> nums = [3,2,2,3], val = 3
<strong>Output:</strong> 2, nums = [2,2,_,_]
<strong>Explanation:</strong> <web-highlight class="webhighlights-highlight" data-highlight-id="c734a678-b543-4303-a5b5-e231546d140c" data-highlight-split-type="tail" data-highlight-id-extra="" markid="674e6a0acacc3b3e61f574b2" media-type="blockquote" style="background-color: rgb(248, 252, 70); color: rgb(0, 0, 0); cursor: pointer;">Your function should return k = 2</web-highlight>, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> nums = [0,1,2,2,3,0,4,2], val = 2
<strong>Output:</strong> 5, nums = [0,1,4,0,3,_,_,_]
<strong>Explanation:</strong> Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
Note that the five elements can be returned in any order.
It does not matter what you leave beyond the returned k (hence they are underscores).
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= nums.length &lt;= 100</code></li>
	<li><code>0 &lt;= nums[i] &lt;= 50</code></li>
	<li><code>0 &lt;= val &lt;= 100</code></li>
</ul>
</div></div>
